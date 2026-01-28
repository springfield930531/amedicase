const axios = require('axios');
const logger = require('../utils/logger');
const config = require('../config');

class ZohoService {
  constructor() {
    this.accessToken = null;
    this.tokenExpiry = null;
    this.apiDomain = config.zoho.apiDomain;
  }

  /**
   * Get or refresh access token
   */
  async getAccessToken() {
    // Return cached token if still valid
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      // Use EU endpoint for Zoho EU accounts
      const tokenUrl = config.zoho.tokenUrl || 'https://accounts.zoho.eu/oauth/v2/token';
      const response = await axios.post(
        tokenUrl,
        null,
        {
          params: {
            refresh_token: config.zoho.refreshToken,
            client_id: config.zoho.clientId,
            client_secret: config.zoho.clientSecret,
            grant_type: 'refresh_token',
          },
        }
      );

      this.accessToken = response.data.access_token;
      // Set expiry to 55 minutes (tokens are valid for 1 hour)
      this.tokenExpiry = Date.now() + 55 * 60 * 1000;

      logger.info('Zoho access token refreshed');
      return this.accessToken;
    } catch (error) {
      logger.error('Error refreshing Zoho token:', error.response?.data || error.message);
      throw new Error('Failed to get Zoho access token');
    }
  }

  /**
   * Make authenticated API request
   */
  async makeRequest(method, endpoint, data = null, params = null) {
    const token = await this.getAccessToken();
    const url = `${this.apiDomain}${endpoint}`;

    try {
      const config = {
        method,
        url,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
      };

      if (data) {
        config.data = data;
      }

      if (params) {
        config.params = params;
      }

      const response = await axios(config);
      return response.data;
    } catch (error) {
      logger.error(`Zoho API error (${method} ${endpoint}):`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Fetch leads from Zoho
   */
  async fetchLeads() {
    try {
      const data = await this.makeRequest('GET', '/crm/v3/Leads', null, {
        fields: 'id,Lead_Status,Status,Call_Attempts,First_No_Answer_At,Phone,Mobile,Full_Name,Email',
      });
      return data.data || [];
    } catch (error) {
      logger.error('Error fetching leads:', error);
      throw error;
    }
  }

  /**
   * Fetch contacts from Zoho
   */
  async fetchContacts() {
    try {
      const data = await this.makeRequest('GET', '/crm/v3/Contacts', null, {
        fields: 'id,Contact_Status,Status,Call_Attempts,First_No_Answer_At,Phone,Mobile,Full_Name,Email',
      });
      return data.data || [];
    } catch (error) {
      logger.error('Error fetching contacts:', error);
      throw error;
    }
  }

  /**
   * Fetch eligible records (Leads + Contacts) with Status = New or No Answer
   */
  async fetchEligibleRecords() {
    try {
      const [leads, contacts] = await Promise.all([
        this.fetchLeads(),
        this.fetchContacts(),
      ]);

      const eligible = [];

      // Process leads - use Lead_Status for leads
      for (const lead of leads) {
        const status = lead.Lead_Status || lead.Status;
        if (status === 'New' || status === 'No Answer') {
          eligible.push({
            ...lead,
            record_type: 'Lead',
            zoho_id: lead.id,
            Status: status, // Normalize to Status for internal use
          });
        }
      }

      // Process contacts - use Contact_Status for contacts
      for (const contact of contacts) {
        const status = contact.Contact_Status || contact.Status;
        if (status === 'New' || status === 'No Answer') {
          eligible.push({
            ...contact,
            record_type: 'Contact',
            zoho_id: contact.id,
            Status: status, // Normalize to Status for internal use
          });
        }
      }

      logger.info(`Found ${eligible.length} eligible records (${leads.length} leads, ${contacts.length} contacts)`);
      return eligible;
    } catch (error) {
      logger.error('Error fetching eligible records:', error);
      throw error;
    }
  }

  /**
   * Update a record in Zoho
   * For Leads, use Lead_Status; for Contacts, use Contact_Status
   */
  async updateRecord(recordType, recordId, data) {
    try {
      const module = recordType === 'Lead' ? 'Leads' : 'Contacts';
      
      // Prepare update data - map Status to correct field
      const updateData = { ...data };
      if (updateData.Status !== undefined) {
        if (recordType === 'Lead') {
          updateData.Lead_Status = updateData.Status;
          delete updateData.Status; // Remove Status, use Lead_Status for Leads
        } else if (recordType === 'Contact') {
          updateData.Contact_Status = updateData.Status;
          delete updateData.Status; // Remove Status, use Contact_Status for Contacts
        }
      }
      
      const requestData = {
        data: [updateData],
      };

      const response = await this.makeRequest(
        'PUT',
        `/crm/v3/${module}`,
        requestData
      );

      logger.info(`Updated ${recordType} ${recordId}:`, updateData);
      return response.data;
    } catch (error) {
      logger.error(`Error updating ${recordType} ${recordId}:`, error);
      throw error;
    }
  }

  /**
   * Get record by ID
   */
  async getRecord(recordType, recordId) {
    try {
      const module = recordType === 'Lead' ? 'Leads' : 'Contacts';
      const data = await this.makeRequest('GET', `/crm/v3/${module}/${recordId}`);
      return data.data?.[0] || null;
    } catch (error) {
      logger.error(`Error fetching ${recordType} ${recordId}:`, error);
      throw error;
    }
  }

  /**
   * Normalize record data - handle NULL values
   * For Leads, use Lead_Status; for Contacts, use Contact_Status
   */
  normalizeRecord(record) {
    const recordType = record.record_type || (record.Lead_Owner ? 'Lead' : 'Contact');
    // For Leads, use Lead_Status; for Contacts, use Contact_Status
    const status = recordType === 'Lead' 
      ? (record.Lead_Status || record.Status) 
      : (record.Contact_Status || record.Status);
    
    return {
      zoho_id: record.id || record.zoho_id,
      record_type: recordType,
      Status: status, // Normalized status for internal use
      Lead_Status: record.Lead_Status, // Keep original for updates (Leads)
      Contact_Status: record.Contact_Status, // Keep original for updates (Contacts)
      Call_Attempts: record.Call_Attempts === null || record.Call_Attempts === undefined ? 0 : parseInt(record.Call_Attempts, 10),
      First_No_Answer_At: record.First_No_Answer_At || null,
      Phone: record.Phone || record.Mobile || null,
      ...record,
    };
  }
}

module.exports = new ZohoService();

