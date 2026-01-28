const logger = require('../utils/logger');
const { dbGet, dbAll, dbRun } = require('../database/db');
const zohoService = require('./zoho.service');
const eightx8Service = require('./eightx8.service');

class CallLogicService {
  /**
   * Calculate day index (0, 1, 2, or 3+)
   * Day 0 = first day (First No Answer At)
   * Day 1 = second day
   * Day 2 = third day
   * Day 3+ = fourth day or later
   */
  calculateDayIndex(firstNoAnswerAt) {
    if (!firstNoAnswerAt) return 0;

    const firstDate = new Date(firstNoAnswerAt);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    firstDate.setHours(0, 0, 0, 0);

    const diffTime = today - firstDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  /**
   * Get daily call limit based on day index
   */
  getDailyLimit(dayIndex) {
    if (dayIndex === 0) return 3;
    if (dayIndex === 1) return 2;
    if (dayIndex === 2) return 2;
    return 0; // Day 3+ - no more calls
  }

  /**
   * Get attempts today for a record
   */
  async getAttemptsToday(zohoId, recordType) {
    const today = new Date().toISOString().split('T')[0];
    const log = await dbGet(
      'SELECT attempts_today FROM call_logs WHERE zoho_id = ? AND record_type = ? AND call_date = ?',
      [zohoId, recordType, today]
    );
    return log ? log.attempts_today : 0;
  }

  /**
   * Increment attempts today
   */
  async incrementAttemptsToday(zohoId, recordType) {
    const today = new Date().toISOString().split('T')[0];
    
    await dbRun(
      `INSERT INTO call_logs (zoho_id, record_type, call_date, attempts_today, updated_at)
       VALUES (?, ?, ?, 1, CURRENT_TIMESTAMP)
       ON CONFLICT(zoho_id, record_type, call_date) 
       DO UPDATE SET attempts_today = attempts_today + 1, updated_at = CURRENT_TIMESTAMP`,
      [zohoId, recordType, today]
    );
  }

  /**
   * Check if a record with Status = No Answer is eligible for calling
   */
  async isNoAnswerEligible(record) {
    const normalized = zohoService.normalizeRecord(record);

    // Must have First No Answer At
    if (!normalized.First_No_Answer_At) {
      logger.warn(`Record ${normalized.zoho_id} has No Answer status but no First_No_Answer_At`);
      return false;
    }

    // Check day index
    const dayIndex = this.calculateDayIndex(normalized.First_No_Answer_At);
    if (dayIndex >= 3) {
      return false; // Should be marked as Dead
    }

    // Check total call attempts
    if (normalized.Call_Attempts >= 7) {
      return false;
    }

    // Check daily limit
    const attemptsToday = await this.getAttemptsToday(normalized.zoho_id, normalized.record_type);
    const dailyLimit = this.getDailyLimit(dayIndex);
    
    if (attemptsToday >= dailyLimit) {
      return false;
    }

    return true;
  }

  /**
   * Check if a record with Status = New is eligible for calling
   */
  async isNewEligible(record) {
    const normalized = zohoService.normalizeRecord(record);

    // Call Attempts must be NULL or 0
    if (normalized.Call_Attempts > 0) {
      return false;
    }

    // First No Answer At must be NULL
    if (normalized.First_No_Answer_At) {
      return false;
    }

    return true;
  }

  /**
   * Process callback from 8x8
   */
  async processCallback(zohoId, recordType, callStatus, timestamp, eightx8CallId) {
    try {
      logger.info(`Processing callback for ${recordType} ${zohoId}`, {
        call_status: callStatus,
        timestamp,
      });

      // Get current record from Zoho
      const record = await zohoService.getRecord(recordType, zohoId);
      if (!record) {
        logger.error(`Record ${zohoId} not found in Zoho`);
        return;
      }

      const normalized = zohoService.normalizeRecord(record);
      const currentStatus = normalized.Status;
      const currentAttempts = normalized.Call_Attempts;

      // Save call history
      await dbRun(
        `INSERT INTO call_history (zoho_id, record_type, call_status, eightx8_call_id, timestamp)
         VALUES (?, ?, ?, ?, ?)`,
        [zohoId, recordType, callStatus, eightx8CallId || null, timestamp || new Date().toISOString()]
      );

      // Increment call attempts
      const newAttempts = currentAttempts + 1;

      // Determine status transition
      let newStatus = currentStatus;
      let firstNoAnswerAt = normalized.First_No_Answer_At;

      if (callStatus === 'no_answer' || callStatus === 'busy' || callStatus === 'failed') {
        // If status was New, transition to No Answer
        if (currentStatus === 'New') {
          newStatus = 'No Answer';
          firstNoAnswerAt = new Date().toISOString();
        }
        // If status was No Answer, check if should become Dead
        else if (currentStatus === 'No Answer') {
          const dayIndex = this.calculateDayIndex(normalized.First_No_Answer_At);
          if (newAttempts >= 7 || dayIndex >= 3) {
            newStatus = 'Dead';
          }
        }
      }
      // If answered, status remains unchanged (agent will update manually)

      // Update record in Zoho
      const updateData = {
        id: zohoId,
        Call_Attempts: newAttempts,
      };

      if (newStatus !== currentStatus) {
        updateData.Status = newStatus;
      }

      if (firstNoAnswerAt !== normalized.First_No_Answer_At) {
        updateData.First_No_Answer_At = firstNoAnswerAt;
      }

      await zohoService.updateRecord(recordType, zohoId, updateData);

      logger.info(`Updated ${recordType} ${zohoId} after callback`, {
        old_status: currentStatus,
        new_status: newStatus,
        attempts: newAttempts,
      });
    } catch (error) {
      logger.error(`Error processing callback for ${zohoId}:`, error);
      throw error;
    }
  }

  /**
   * Process eligible records and initiate calls
   */
  async processEligibleRecords() {
    try {
      logger.info('Starting to process eligible records');

      // Fetch eligible records from Zoho
      const allRecords = await zohoService.fetchEligibleRecords();

      // Separate by status
      const newRecords = allRecords.filter(r => r.Status === 'New');
      const noAnswerRecords = allRecords.filter(r => r.Status === 'No Answer');

      logger.info(`Found ${newRecords.length} New records and ${noAnswerRecords.length} No Answer records`);

      const results = {
        processed: 0,
        called: 0,
        errors: 0,
        skipped: 0,
      };

      // Process New records first
      for (const record of newRecords) {
        try {
          const normalized = zohoService.normalizeRecord(record);
          
          if (!(await this.isNewEligible(record))) {
            results.skipped++;
            continue;
          }

          if (!eightx8Service.validatePhoneNumber(normalized.Phone)) {
            logger.warn(`Invalid phone number for ${normalized.zoho_id}: ${normalized.Phone}`);
            results.skipped++;
            continue;
          }

          const phoneNumber = eightx8Service.formatPhoneNumber(normalized.Phone);
          await eightx8Service.initiateCall(phoneNumber, normalized.zoho_id, normalized.record_type);
          
          await this.incrementAttemptsToday(normalized.zoho_id, normalized.record_type);
          results.called++;
          results.processed++;
        } catch (error) {
          logger.error(`Error processing New record ${record.id}:`, error);
          results.errors++;
        }
      }

      // Process No Answer records
      for (const record of noAnswerRecords) {
        try {
          const normalized = zohoService.normalizeRecord(record);
          
          if (!(await this.isNoAnswerEligible(record))) {
            results.skipped++;
            continue;
          }

          if (!eightx8Service.validatePhoneNumber(normalized.Phone)) {
            logger.warn(`Invalid phone number for ${normalized.zoho_id}: ${normalized.Phone}`);
            results.skipped++;
            continue;
          }

          const phoneNumber = eightx8Service.formatPhoneNumber(normalized.Phone);
          await eightx8Service.initiateCall(phoneNumber, normalized.zoho_id, normalized.record_type);
          
          await this.incrementAttemptsToday(normalized.zoho_id, normalized.record_type);
          results.called++;
          results.processed++;
        } catch (error) {
          logger.error(`Error processing No Answer record ${record.id}:`, error);
          results.errors++;
        }
      }

      logger.info('Finished processing eligible records', results);
      return results;
    } catch (error) {
      logger.error('Error in processEligibleRecords:', error);
      throw error;
    }
  }
}

module.exports = new CallLogicService();



