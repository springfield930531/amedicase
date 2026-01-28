# API Integration Guide

## Zoho CRM API

### Autentificare

Microserviciul folosește OAuth 2.0 cu refresh token pentru autentificare la Zoho CRM.

**Pași pentru configurare:**

1. Creează o aplicație în [Zoho Developer Console](https://api-console.zoho.com/)
2. Configurează redirect URI (ex: `http://localhost:8080/oauth/callback`)
3. Obține `client_id` și `client_secret`
4. Generează `refresh_token` folosind authorization code
5. Adaugă credentials în `.env`

### Endpoints Utilizate

- `GET /crm/v3/Leads` - Fetch leads
- `GET /crm/v3/Contacts` - Fetch contacts
- `GET /crm/v3/Leads/{id}` - Get lead by ID
- `GET /crm/v3/Contacts/{id}` - Get contact by ID
- `PUT /crm/v3/Leads` - Update lead
- `PUT /crm/v3/Contacts` - Update contact

### Câmpuri Modificate

Microserviciul modifică următoarele câmpuri:
- `Status` - Statusul înregistrării
- `Call_Attempts` - Numărul de apeluri
- `First_No_Answer_At` - Data primului no answer

## 8x8 API

### Notă Importantă

Implementarea actuală a serviciului 8x8 (`services/eightx8.service.js`) este un **template** și trebuie ajustată conform documentației reale a API-ului 8x8.

### Ajustări Necesare

1. **Autentificare**: Ajustează metoda `getAuthToken()` conform documentației 8x8
   - Poate folosi API key/secret în headers
   - Poate necesita OAuth 2.0
   - Poate folosi JWT tokens

2. **Inițiere Apel**: Ajustează metoda `initiateCall()` conform documentației 8x8
   - Verifică structura exactă a payload-ului
   - Verifică parametrii necesari (phone number format, callback URL, etc.)
   - Verifică răspunsul API-ului (call_id, status, etc.)

3. **Callback Format**: Verifică formatul exact al callback-ului de la 8x8
   - Ajustează endpoint-ul `/api/callback` dacă este necesar
   - Verifică câmpurile din payload (call_status, call_id, etc.)

### Exemple de Configurare

#### Dacă 8x8 folosește API Key în Headers:

```javascript
async makeRequest(method, endpoint, data = null) {
  const headers = {
    'X-API-Key': this.apiKey,
    'X-API-Secret': this.apiSecret,
    'Content-Type': 'application/json',
  };
  // ...
}
```

#### Dacă 8x8 folosește OAuth 2.0:

```javascript
async getAuthToken() {
  const response = await axios.post(`${this.baseUrl}/oauth/token`, {
    grant_type: 'client_credentials',
    client_id: this.apiKey,
    client_secret: this.apiSecret,
  });
  return response.data.access_token;
}
```

#### Dacă 8x8 folosește JWT:

```javascript
const jwt = require('jsonwebtoken');

async getAuthToken() {
  const token = jwt.sign(
    { api_key: this.apiKey },
    this.apiSecret,
    { expiresIn: '1h' }
  );
  return token;
}
```

### Testare Integrare 8x8

1. Testează autentificarea:
```bash
curl -X POST https://api.8x8.com/auth/token \
  -H "Content-Type: application/json" \
  -d '{"api_key": "your_key", "api_secret": "your_secret"}'
```

2. Testează inițierea apelului:
```bash
curl -X POST https://api.8x8.com/v1/calls \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "+1234567890",
    "callback_url": "https://8x8.hero-log.com/api/callback"
  }'
```

3. Verifică callback-ul:
```bash
curl -X POST https://8x8.hero-log.com/api/callback \
  -H "Content-Type: application/json" \
  -d '{
    "zoho_id": "123456789",
    "record_type": "Lead",
    "call_status": "answered",
    "timestamp": "2025-12-10T10:05:00.000Z",
    "call_id": "8x8-call-123"
  }'
```

## Debugging

### Verificare Logs

```bash
# Logs aplicație
docker-compose logs service-8x8

# Logs erori
tail -f error.log

# Logs complete
tail -f combined.log
```

### Testare Manuală

```bash
# Health check
curl https://8x8.hero-log.com/health

# Trigger cron manual
curl -X POST https://8x8.hero-log.com/api/cron

# Verifică statistici
curl https://8x8.hero-log.com/api/stats
```

### Verificare Baza de Date

```bash
# Conectează-te la baza de date SQLite
sqlite3 data/call_logs.db

# Interogări utile
SELECT * FROM call_logs WHERE call_date = date('now');
SELECT * FROM call_history ORDER BY timestamp DESC LIMIT 10;
```



