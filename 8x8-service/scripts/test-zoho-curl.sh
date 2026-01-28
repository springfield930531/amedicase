#!/bin/bash

# Script pentru testare Zoho API cu curl și afișare răspuns

cd "$(dirname "$0")/.."
source .env 2>/dev/null || {
  echo "❌ Error: .env file not found"
  exit 1
}

echo "🔍 Testing Zoho API Request..."
echo ""

# Step 1: Get access token
echo "📡 Step 1: Getting access token..."
TOKEN_RESPONSE=$(curl -s -X POST "https://accounts.zoho.com/oauth/v2/token" \
  -d "grant_type=refresh_token" \
  -d "client_id=$ZOHO_CLIENT_ID" \
  -d "client_secret=$ZOHO_CLIENT_SECRET" \
  -d "refresh_token=$ZOHO_REFRESH_TOKEN")

echo "Token Response:"
echo "$TOKEN_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$TOKEN_RESPONSE"
echo ""

# Extract access token
ACCESS_TOKEN=$(echo "$TOKEN_RESPONSE" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$ACCESS_TOKEN" ]; then
  echo "❌ Failed to get access token"
  exit 1
fi

echo "✅ Access token obtained: ${ACCESS_TOKEN:0:30}..."
echo ""

# Step 2: Fetch Leads
echo "📡 Step 2: Fetching Leads from Zoho..."
echo "Request: GET $ZOHO_API_DOMAIN/crm/v3/Leads"
echo ""

LEADS_RESPONSE=$(curl -s -X GET "$ZOHO_API_DOMAIN/crm/v3/Leads" \
  -H "Authorization: Zoho-oauthtoken $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -G -d "page=1" -d "per_page=3")

echo "Leads Response:"
echo "================================================================================"
echo "$LEADS_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$LEADS_RESPONSE"
echo "================================================================================"
echo ""

# Step 3: Fetch Contacts
echo "📡 Step 3: Fetching Contacts from Zoho..."
echo "Request: GET $ZOHO_API_DOMAIN/crm/v3/Contacts"
echo ""

CONTACTS_RESPONSE=$(curl -s -X GET "$ZOHO_API_DOMAIN/crm/v3/Contacts" \
  -H "Authorization: Zoho-oauthtoken $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -G -d "page=1" -d "per_page=3")

echo "Contacts Response:"
echo "================================================================================"
echo "$CONTACTS_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$CONTACTS_RESPONSE"
echo "================================================================================"
echo ""

# Show sample record structure
if echo "$LEADS_RESPONSE" | grep -q '"data"'; then
  echo "📋 Sample Lead Record Structure:"
  echo "================================================================================"
  echo "$LEADS_RESPONSE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'data' in data and len(data['data']) > 0:
        record = data['data'][0]
        print('Fields:', ', '.join(record.keys()))
        print('\nFull record:')
        print(json.dumps(record, indent=2))
except:
    pass
" 2>/dev/null
  echo "================================================================================"
fi



