const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');
const callLogicService = require('../services/call-logic.service');

/**
 * POST /api/cron
 * Endpoint for cron job to process eligible records and initiate calls
 */
router.post('/cron', async (req, res) => {
  try {
    logger.info('Cron job triggered');
    
    const results = await callLogicService.processEligibleRecords();
    
    res.json({
      success: true,
      message: 'Cron job completed',
      results,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error('Error in cron job:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing cron job',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

/**
 * POST /api/callback
 * Endpoint for 8x8 callback after call completion
 * Expected payload:
 * {
 *   zoho_id: string,
 *   record_type: 'Lead' | 'Contact',
 *   call_status: 'answered' | 'no_answer' | 'busy' | 'failed',
 *   timestamp: string (ISO format),
 *   call_id: string (optional, 8x8 call ID)
 * }
 */
router.post('/callback', async (req, res) => {
  try {
    const { zoho_id, record_type, call_status, timestamp, call_id } = req.body;

    // Validate required fields
    if (!zoho_id || !record_type || !call_status) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: zoho_id, record_type, call_status',
      });
    }

    // Validate record_type
    if (record_type !== 'Lead' && record_type !== 'Contact') {
      return res.status(400).json({
        success: false,
        message: 'Invalid record_type. Must be "Lead" or "Contact"',
      });
    }

    // Validate call_status
    const validStatuses = ['answered', 'no_answer', 'busy', 'failed'];
    if (!validStatuses.includes(call_status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid call_status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    logger.info('Received callback from 8x8', {
      zoho_id,
      record_type,
      call_status,
    });

    await callLogicService.processCallback(
      zoho_id,
      record_type,
      call_status,
      timestamp || new Date().toISOString(),
      call_id
    );

    res.json({
      success: true,
      message: 'Callback processed successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error('Error processing callback:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing callback',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

/**
 * GET /api/stats
 * Get statistics about calls and records
 */
router.get('/stats', async (req, res) => {
  try {
    const { dbGet, dbAll } = require('../database/db');
    
    const today = new Date().toISOString().split('T')[0];
    
    // Get today's call logs
    const todayLogs = await dbAll(
      'SELECT * FROM call_logs WHERE call_date = ?',
      [today]
    );

    // Get recent call history
    const recentHistory = await dbAll(
      `SELECT * FROM call_history 
       WHERE timestamp >= datetime('now', '-7 days')
       ORDER BY timestamp DESC
       LIMIT 100`
    );

    res.json({
      success: true,
      stats: {
        today: {
          total_records: todayLogs.length,
          total_attempts: todayLogs.reduce((sum, log) => sum + log.attempts_today, 0),
        },
        recent_calls: recentHistory.length,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    logger.error('Error getting stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting stats',
      error: error.message,
    });
  }
});

module.exports = router;



