#!/usr/bin/env node

/**
 * Testează diferite regiuni Zoho pentru a identifica endpoint-ul corect
 */

require('dotenv').config();
const axios = require('axios');

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;

// Diferite endpoint-uri pentru regiuni Zoho
const REGIONS = [
  { name: 'US (Default)', tokenUrl: 'https://accounts.zoho.com/oauth/v2/token', apiUrl: 'https://www.zohoapis.com' },
  { name: 'EU', tokenUrl: 'https://accounts.zoho.eu/oauth/v2/token', apiUrl: 'https://www.zohoapis.eu' },
  { name: 'IN', tokenUrl: 'https://accounts.zoho.in/oauth/v2/token', apiUrl: 'https://www.zohoapis.in' },
  { name: 'AU', tokenUrl: 'https://accounts.zoho.com.au/oauth/v2/token', apiUrl: 'https://www.zohoapis.com.au' },
  { name: 'JP', tokenUrl: 'https://accounts.zoho.jp/oauth/v2/token', apiUrl: 'https://www.zohoapis.jp' },
];

console.log('🔍 Testing Zoho regions to find correct endpoint...\n');
console.log('Refresh Token:', ZOHO_REFRESH_TOKEN?.substring(0, 30) + '...\n');

async function testRegion(region) {
  try {
    console.log(`📡 Testing ${region.name}...`);
    console.log(`   Token URL: ${region.tokenUrl}`);
    
    const tokenResponse = await axios.post(region.tokenUrl, null, {
      params: {
        refresh_token: ZOHO_REFRESH_TOKEN,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token',
      },
    });

    if (tokenResponse.data.error) {
      console.log(`   ❌ Error: ${tokenResponse.data.error}\n`);
      return null;
    }

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) {
      console.log(`   ❌ No access token in response\n`);
      return null;
    }

    console.log(`   ✅ Access token obtained!`);
    console.log(`   Token: ${accessToken.substring(0, 30)}...`);

    // Test API endpoint
    console.log(`   📡 Testing API: ${region.apiUrl}/crm/v3/Leads`);
    const apiResponse = await axios.get(`${region.apiUrl}/crm/v3/Leads`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      params: { page: 1, per_page: 1 },
    });

    console.log(`   ✅ API working! Found ${apiResponse.data.data?.length || 0} lead(s)\n`);
    
    return {
      region: region.name,
      tokenUrl: region.tokenUrl,
      apiUrl: region.apiUrl,
      accessToken: accessToken,
      apiResponse: apiResponse.data,
    };

  } catch (error) {
    if (error.response) {
      console.log(`   ❌ Error: ${error.response.status} - ${JSON.stringify(error.response.data)}\n`);
    } else {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
    return null;
  }
}

async function main() {
  const results = [];
  
  for (const region of REGIONS) {
    const result = await testRegion(region);
    if (result) {
      results.push(result);
    }
  }

  console.log('\n' + '='.repeat(80));
  if (results.length > 0) {
    console.log('✅ Working region found!');
    console.log('='.repeat(80));
    results.forEach(r => {
      console.log(`\nRegion: ${r.region}`);
      console.log(`Token URL: ${r.tokenUrl}`);
      console.log(`API URL: ${r.apiUrl}`);
      console.log('\nSample API Response:');
      console.log(JSON.stringify(r.apiResponse, null, 2));
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('📝 Update your .env file with:');
    if (results[0].tokenUrl.includes('.eu')) {
      console.log('   ZOHO_API_DOMAIN=https://www.zohoapis.eu');
      console.log('   (And update zoho.service.js to use: https://accounts.zoho.eu/oauth/v2/token)');
    } else if (results[0].tokenUrl.includes('.in')) {
      console.log('   ZOHO_API_DOMAIN=https://www.zohoapis.in');
      console.log('   (And update zoho.service.js to use: https://accounts.zoho.in/oauth/v2/token)');
    } else {
      console.log('   ZOHO_API_DOMAIN=https://www.zohoapis.com');
    }
  } else {
    console.log('❌ No working region found. Please check:');
    console.log('   1. Refresh token is correct');
    console.log('   2. Client ID and Secret are correct');
    console.log('   3. Application has correct permissions');
  }
  console.log('='.repeat(80));
}

main();



