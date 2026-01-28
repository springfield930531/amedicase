#!/usr/bin/env node

require('dotenv').config();
const axios = require('axios');

console.log('🔍 Testing Zoho API Request...\n');
console.log('Credentials:');
console.log('  Client ID:', process.env.ZOHO_CLIENT_ID?.substring(0, 20) + '...');
console.log('  Refresh Token:', process.env.ZOHO_REFRESH_TOKEN?.substring(0, 20) + '...\n');

(async () => {
  try {
    // Step 1: Get access token (using EU endpoint)
    console.log('📡 Step 1: Getting access token from Zoho EU...\n');
    const tokenUrl = process.env.ZOHO_TOKEN_URL || 'https://accounts.zoho.eu/oauth/v2/token';
    const tokenResponse = await axios.post(
      tokenUrl,
      null,
      {
        params: {
          refresh_token: process.env.ZOHO_REFRESH_TOKEN,
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          grant_type: 'refresh_token',
        },
      }
    );

    console.log('Response from Zoho Token API:');
    console.log('='.repeat(80));
    console.log(JSON.stringify(tokenResponse.data, null, 2));
    console.log('='.repeat(80));
    console.log('');

    if (tokenResponse.data.error) {
      console.log('❌ Error: Refresh token is invalid or expired!');
      console.log('   Error:', tokenResponse.data.error);
      if (tokenResponse.data.error === 'invalid_code') {
        console.log('\n   You need to generate a new refresh token.');
        console.log('   Visit: https://api-console.zoho.com/');
      }
      return;
    }

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) {
      console.log('❌ No access token in response!');
      return;
    }

    console.log('✅ Access token obtained successfully!');
    console.log('   Token:', accessToken.substring(0, 50) + '...\n');

    // Step 2: Fetch Leads
    console.log('📡 Step 2: Fetching Leads from Zoho CRM...\n');
    const apiDomain = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.eu';
    const leadsResponse = await axios.get(
      `${apiDomain}/crm/v3/Leads`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        params: {
          fields: 'id,Status,Call_Attempts,First_No_Answer_At,Phone,Mobile,Full_Name,Email',
          page: 1,
          per_page: 3,
        },
      }
    );

    console.log('✅ Leads Response from Zoho API (JSON):');
    console.log('='.repeat(80));
    console.log(JSON.stringify(leadsResponse.data, null, 2));
    console.log('='.repeat(80));
    console.log('');

    if (leadsResponse.data.data && leadsResponse.data.data.length > 0) {
      console.log('📋 Sample Lead Record Structure:');
      console.log('='.repeat(80));
      const sample = leadsResponse.data.data[0];
      console.log('Available fields:', Object.keys(sample).join(', '));
      console.log('\nFull record:');
      console.log(JSON.stringify(sample, null, 2));
      console.log('='.repeat(80));
    } else {
      console.log('ℹ️  No leads found in response.');
    }

    // Step 3: Fetch Contacts
    console.log('\n📡 Step 3: Fetching Contacts from Zoho CRM...\n');
    const contactsResponse = await axios.get(
      `${apiDomain}/crm/v3/Contacts`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        params: {
          fields: 'id,Status,Call_Attempts,First_No_Answer_At,Phone,Mobile,Full_Name,Email',
          page: 1,
          per_page: 3,
        },
      }
    );

    console.log('✅ Contacts Response from Zoho API (JSON):');
    console.log('='.repeat(80));
    console.log(JSON.stringify(contactsResponse.data, null, 2));
    console.log('='.repeat(80));

    if (contactsResponse.data.data && contactsResponse.data.data.length > 0) {
      console.log('\n📋 Sample Contact Record Structure:');
      console.log('='.repeat(80));
      const sample = contactsResponse.data.data[0];
      console.log('Available fields:', Object.keys(sample).join(', '));
      console.log('\nFull record:');
      console.log(JSON.stringify(sample, null, 2));
      console.log('='.repeat(80));
    } else {
      console.log('\nℹ️  No contacts found in response.');
    }

    console.log('\n🎉 Request completed successfully!');

  } catch (error) {
    console.log('\n❌ Error occurred:');
    console.log('='.repeat(80));
    if (error.response) {
      console.log('Status Code:', error.response.status);
      console.log('Response Data:');
      console.log(JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      console.log('No response received:', error.message);
    } else {
      console.log('Error:', error.message);
    }
    console.log('='.repeat(80));
  }
})();

