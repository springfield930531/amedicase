const axios = require('axios');
const logger = require('../utils/logger');
const config = require('../config');

class EightX8Service {
  constructor() {
    this.apiKey = config.eightx8.apiKey;
    this.apiSecret = config.eightx8.apiSecret;
    this.baseUrl = config.eightx8.baseUrl;
    this.callbackUrl = config.eightx8.callbackUrl;
  }

  /**
   * Get authentication token (if required by 8x8 API)
   * Adjust based on actual 8x8 API authentication method
   */
  async getAuthToken() {
    // TODO: Implement based on 8x8 API authentication requirements
    // This is a placeholder - adjust according to 8x8 API docs
    try {
      const response = await axios.post(`${this.baseUrl}/auth/token`, {
        api_key: this.apiKey,
        api_secret: this.apiSecret,
      });
      return response.data.token || response.data.access_token;
    } catch (error) {
      logger.error('Error getting 8x8 auth token:', error.response?.data || error.message);
      // If 8x8 uses API key/secret directly in headers, return null
      return null;
    }
  }

  /**
   * Make authenticated API request to 8x8
   */
  async makeRequest(method, endpoint, data = null) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {};

    // Add authentication (adjust based on 8x8 API requirements)
    const token = await this.getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      // If 8x8 uses API key/secret in headers
      headers['X-API-Key'] = this.apiKey;
      headers['X-API-Secret'] = this.apiSecret;
    }

    try {
      const requestConfig = {
        method,
        url,
        headers,
      };

      if (data) {
        requestConfig.data = data;
      }

      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      logger.error(`8x8 API error (${method} ${endpoint}):`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Initiate a call through 8x8
   * @param {string} phoneNumber - Phone number to call
   * @param {string} zohoId - Zoho record ID for callback
   * @param {string} recordType - 'Lead' or 'Contact'
   * @returns {Promise<Object>} Call response with call_id
   */
  async initiateCall(phoneNumber, zohoId, recordType) {
    try {
      // TODO: Adjust payload structure based on actual 8x8 API documentation
      const callData = {
        phone_number: phoneNumber,
        callback_url: this.callbackUrl,
        callback_data: {
          zoho_id: zohoId,
          record_type: recordType,
        },
        // Add other required 8x8 parameters as needed
      };

      const response = await this.makeRequest('POST', '/v1/calls', callData);

      logger.info(`Call initiated for ${recordType} ${zohoId} to ${phoneNumber}`, {
        call_id: response.call_id || response.id,
        zoho_id: zohoId,
      });

      return {
        call_id: response.call_id || response.id || response.data?.call_id,
        status: response.status || 'initiated',
        ...response,
      };
    } catch (error) {
      logger.error(`Error initiating call for ${zohoId}:`, error);
      throw error;
    }
  }

  /**
   * Validate phone number format
   */
  validatePhoneNumber(phone) {
    if (!phone) return false;
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // Basic validation - adjust based on requirements
    return cleaned.length >= 10;
  }

  /**
   * Format phone number for 8x8 (if needed)
   */
  formatPhoneNumber(phone) {
    if (!phone) return null;
    // Remove all non-digit characters
    return phone.replace(/\D/g, '');
  }
}

module.exports = new EightX8Service();



