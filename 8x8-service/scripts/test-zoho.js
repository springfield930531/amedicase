#!/usr/bin/env node

/**
 * Script pentru testare conexiune Zoho CRM
 * Rulează: node scripts/test-zoho.js
 */

require('dotenv').config();
const axios = require('axios');

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_API_DOMAIN = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.com';

console.log('🔍 Testing Zoho CRM Connection...\n');

// Verifică că toate variabilele sunt setate
if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
  console.error('❌ Error: Missing Zoho credentials in .env file');
  console.log('\nRequired variables:');
  console.log('  - ZOHO_CLIENT_ID');
  console.log('  - ZOHO_CLIENT_SECRET');
  console.log('  - ZOHO_REFRESH_TOKEN');
  process.exit(1);
}

console.log('✅ Credentials loaded:');
console.log(`   Client ID: ${ZOHO_CLIENT_ID.substring(0, 20)}...`);
console.log(`   Client Secret: ${ZOHO_CLIENT_SECRET.substring(0, 10)}...`);
console.log(`   Refresh Token: ${ZOHO_REFRESH_TOKEN.substring(0, 20)}...`);
console.log(`   API Domain: ${ZOHO_API_DOMAIN}\n`);

// Testează obținerea access token
async function testConnection() {
  try {
    console.log('📡 Step 1: Getting access token...');
    const tokenResponse = await axios.post(
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

    if (tokenResponse.data.error) {
      throw new Error(`Zoho API error: ${JSON.stringify(tokenResponse.data)}`);
    }
    
    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) {
      throw new Error('Access token not found in response: ' + JSON.stringify(tokenResponse.data));
    }
    console.log('✅ Access token obtained successfully!');
    console.log(`   Token: ${accessToken.substring(0, 30)}...\n`);

    // Testează fetch leads
    console.log('📡 Step 2: Testing Leads API...');
    const leadsResponse = await axios.get(`${ZOHO_API_DOMAIN}/crm/v3/Leads`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      params: {
        page: 1,
        per_page: 1,
      },
    });

    console.log('✅ Leads API working!');
    console.log(`   Found ${leadsResponse.data.data?.length || 0} lead(s) in test\n`);

    // Testează fetch contacts
    console.log('📡 Step 3: Testing Contacts API...');
    const contactsResponse = await axios.get(`${ZOHO_API_DOMAIN}/crm/v3/Contacts`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      params: {
        page: 1,
        per_page: 1,
      },
    });

    console.log('✅ Contacts API working!');
    console.log(`   Found ${contactsResponse.data.data?.length || 0} contact(s) in test\n`);

    console.log('🎉 All tests passed! Zoho CRM integration is working correctly.\n');

  } catch (error) {
    console.error('❌ Error testing Zoho connection:');
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Response: ${JSON.stringify(error.response.data, null, 2)}`);
      
      if (error.response.data.error === 'invalid_code') {
        console.error('\n⚠️  Refresh token is invalid or expired!');
        console.error('   You need to generate a new refresh token.');
        console.error('   Steps:');
        console.error('   1. Go to https://api-console.zoho.com/');
        console.error('   2. Create/select your application');
        console.error('   3. Generate a new refresh token');
        console.error('   4. Update ZOHO_REFRESH_TOKEN in .env file');
      }
    } else {
      console.error(`   Message: ${error.message}`);
    }
    process.exit(1);
  }
}

testConnection();

