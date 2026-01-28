#!/usr/bin/env node

/**
 * Script pentru testare request Zoho API și afișare răspuns
 */

require('dotenv').config();
const axios = require('axios');

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_API_DOMAIN = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.com';

console.log('🔍 Testing Zoho API Request...\n');

// Step 1: Get access token
async function getAccessToken() {
  try {
    console.log('📡 Step 1: Getting access token...');
    const response = await axios.post(
      'https://accounts.zoho.com/oauth/v2/token',
      null,
      {
        params: {
          refresh_token: ZOHO_REFRESH_TOKEN,
          client_id: ZOHO_CLIENT_ID,
          client_secret: ZOHO_CLIENT_SECRET,
          grant_type: 'refresh_token',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('❌ Error getting access token:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Message:', error.message);
    }
    throw error;
  }
}

// Step 2: Fetch Leads
async function fetchLeads(accessToken) {
  try {
    console.log('\n📡 Step 2: Fetching Leads from Zoho...');
    const response = await axios.get(`${ZOHO_API_DOMAIN}/crm/v3/Leads`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        page: 1,
        per_page: 3, // Fetch first 3 leads for testing
      },
    });

    return response.data;
  } catch (error) {
    console.error('❌ Error fetching leads:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Message:', error.message);
    }
    throw error;
  }
}

// Step 3: Fetch Contacts
async function fetchContacts(accessToken) {
  try {
    console.log('\n📡 Step 3: Fetching Contacts from Zoho...');
    const response = await axios.get(`${ZOHO_API_DOMAIN}/crm/v3/Contacts`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        page: 1,
        per_page: 3, // Fetch first 3 contacts for testing
      },
    });

    return response.data;
  } catch (error) {
    console.error('❌ Error fetching contacts:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Message:', error.message);
    }
    throw error;
  }
}

// Main execution
async function main() {
  try {
    const accessToken = await getAccessToken();
    console.log('✅ Access token obtained:', accessToken.substring(0, 30) + '...\n');

    const leadsData = await fetchLeads(accessToken);
    console.log('✅ Leads Response:');
    console.log('='.repeat(80));
    console.log(JSON.stringify(leadsData, null, 2));
    console.log('='.repeat(80));

    const contactsData = await fetchContacts(accessToken);
    console.log('\n✅ Contacts Response:');
    console.log('='.repeat(80));
    console.log(JSON.stringify(contactsData, null, 2));
    console.log('='.repeat(80));

    // Show structure of first record if available
    if (leadsData.data && leadsData.data.length > 0) {
      console.log('\n📋 Sample Lead Record Structure:');
      console.log('='.repeat(80));
      const sampleLead = leadsData.data[0];
      console.log('Fields:', Object.keys(sampleLead).join(', '));
      console.log('\nFull record:');
      console.log(JSON.stringify(sampleLead, null, 2));
    }

    if (contactsData.data && contactsData.data.length > 0) {
      console.log('\n📋 Sample Contact Record Structure:');
      console.log('='.repeat(80));
      const sampleContact = contactsData.data[0];
      console.log('Fields:', Object.keys(sampleContact).join(', '));
      console.log('\nFull record:');
      console.log(JSON.stringify(sampleContact, null, 2));
    }

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

main();



