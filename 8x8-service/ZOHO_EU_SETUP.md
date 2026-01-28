# Zoho EU Configuration Guide

## Configurație Actualizată

Am actualizat microserviciul pentru a folosi **Zoho EU endpoints**:

- **Token URL**: `https://accounts.zoho.eu/oauth/v2/token`
- **API Domain**: `https://www.zohoapis.eu`

## Generare Refresh Token pentru Zoho EU

### Pasul 1: Accesează Zoho Developer Console EU

**Link**: https://api-console.zoho.eu/

### Pasul 2: Construiește URL-ul de autorizare

```
https://accounts.zoho.eu/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL&client_id=1000.F9SMI4WDB5S7DBCAXSWUSHEF8H7QZM&response_type=code&access_type=offline&redirect_uri=https://8x8.hero-log.com/oauth/callback
```

**Important**: Folosește `accounts.zoho.eu` (nu `.com`)!

### Pasul 3: Autorizează aplicația

1. Deschide URL-ul de mai sus în browser
2. Conectează-te cu contul Zoho EU
3. Autorizează aplicația
4. Vei fi redirecționat la: `https://8x8.hero-log.com/oauth/callback?code=AUTHORIZATION_CODE`
5. Copiază `AUTHORIZATION_CODE` din URL

### Pasul 4: Obține Refresh Token

```bash
curl -X POST "https://accounts.zoho.eu/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=1000.F9SMI4WDB5S7DBCAXSWUSHEF8H7QZM" \
  -d "client_secret=345e2ea2c74109125a3edddc9e03d9590704ed4b09" \
  -d "redirect_uri=https://8x8.hero-log.com/oauth/callback" \
  -d "code=AUTHORIZATION_CODE"
```

**Răspuns așteptat:**
```json
{
  "access_token": "...",
  "refresh_token": "1000.xxxxx...",
  "expires_in": 3600,
  "api_domain": "https://www.zohoapis.eu",
  "token_type": "Bearer"
}
```

### Pasul 5: Actualizează .env

```env
ZOHO_REFRESH_TOKEN=noul_refresh_token_aici
ZOHO_API_DOMAIN=https://www.zohoapis.eu
```

## Verificare

După ce actualizezi refresh token-ul, testează:

```bash
cd /root/amedicase/8x8-service
node scripts/test-zoho-simple.js
```

## Link-uri Utile

- **Zoho Developer Console EU**: https://api-console.zoho.eu/
- **Zoho CRM API EU Docs**: https://www.zoho.eu/crm/developer/docs/api/v2/

## Notă Importantă

Refresh token-ul trebuie generat folosind endpoint-ul EU (`accounts.zoho.eu`), nu US (`accounts.zoho.com`). Token-urile generate pentru o regiune nu funcționează pentru alta.



