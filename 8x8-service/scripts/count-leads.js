#!/usr/bin/env node

/**
 * Script pentru numărarea leadurilor din Zoho după Lead_Status
 */

require('dotenv').config();
const axios = require('axios');

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_API_DOMAIN = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.eu';
const TOKEN_URL = process.env.ZOHO_TOKEN_URL || 'https://accounts.zoho.eu/oauth/v2/token';

async function getAccessToken() {
  const response = await axios.post(TOKEN_URL, null, {
    params: {
      refresh_token: ZOHO_REFRESH_TOKEN,
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    },
  });
  return response.data.access_token;
}

async function fetchAllLeads(accessToken) {
  let allLeads = [];
  let page = 1;
  let hasMore = true;
  let nextPageToken = null;

  while (hasMore) {
    try {
      const params = {
        fields: 'id,Lead_Status,Call_Attempts,First_No_Answer_At,Phone,Mobile,Full_Name,Email',
        per_page: 200, // Maximum per page
        page: page,
      };

      if (nextPageToken) {
        params.page_token = nextPageToken;
        delete params.page;
      }

      const response = await axios.get(`${ZOHO_API_DOMAIN}/crm/v3/Leads`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        params: params,
      });

      const data = response.data.data || [];
      allLeads = allLeads.concat(data);

      console.log(`📄 Fetched page ${page}: ${data.length} leads (Total: ${allLeads.length})`);

      // Check if there are more records
      if (response.data.info && response.data.info.more_records) {
        nextPageToken = response.data.info.next_page_token;
        page++;
      } else {
        hasMore = false;
      }
    } catch (error) {
      console.error('Error fetching leads:', error.response?.data || error.message);
      throw error;
    }
  }

  return allLeads;
}

async function main() {
  try {
    console.log('🔍 Counting all Leads from Zoho...\n');
    
    console.log('📡 Step 1: Getting access token...');
    const accessToken = await getAccessToken();
    console.log('✅ Access token obtained\n');

    console.log('📡 Step 2: Fetching all leads...');
    const allLeads = await fetchAllLeads(accessToken);
    console.log(`\n✅ Total leads fetched: ${allLeads.length}\n`);

    // Count by Lead_Status
    const statusCounts = {};
    const newLeads = [];
    const noAnswerLeads = [];

    for (const lead of allLeads) {
      const status = lead.Lead_Status || lead.Status || 'Unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;

      if (status === 'New') {
        newLeads.push(lead);
      } else if (status === 'No Answer') {
        noAnswerLeads.push(lead);
      }
    }

    console.log('='.repeat(80));
    console.log('📊 LEAD STATUS BREAKDOWN:');
    console.log('='.repeat(80));
    console.log(`\nTotal Leads: ${allLeads.length}`);
    console.log('\nBy Lead_Status:');
    
    // Sort by count descending
    const sortedStatuses = Object.entries(statusCounts).sort((a, b) => b[1] - a[1]);
    for (const [status, count] of sortedStatuses) {
      console.log(`  ${status}: ${count}`);
    }

    console.log('\n' + '='.repeat(80));
    console.log('🎯 TARGET STATUSES:');
    console.log('='.repeat(80));
    console.log(`\n✅ New: ${newLeads.length} (Expected: 1948)`);
    console.log(`   Difference: ${newLeads.length - 1948}`);
    console.log(`\n✅ No Answer: ${noAnswerLeads.length} (Expected: 681)`);
    console.log(`   Difference: ${noAnswerLeads.length - 681}`);

    // Show sample records
    if (newLeads.length > 0) {
      console.log('\n📋 Sample New Lead:');
      console.log(JSON.stringify(newLeads[0], null, 2));
    }

    if (noAnswerLeads.length > 0) {
      console.log('\n📋 Sample No Answer Lead:');
      console.log(JSON.stringify(noAnswerLeads[0], null, 2));
    }

    console.log('\n' + '='.repeat(80));

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();



