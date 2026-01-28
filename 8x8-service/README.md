# 8x8 Auto-Dialer Microservice

Microserviciu pentru auto-dialer care integrează Zoho CRM și 8x8 pentru gestionarea automată a apelurilor.

## Descriere

Microserviciul trage leaduri și contacte din Zoho CRM, le trimite la apelare în 8x8 și aplică logica de business pentru gestionarea apelurilor automate. Sistemul rulează de 3 ori pe zi prin cron job și procesează înregistrările eligibile conform regulilor de business.

## Structură Proiect

```
8x8-service/
├── config/           # Configurație aplicație
├── database/         # Schema și conexiune baza de date
├── routes/           # Endpoint-uri API
├── services/         # Servicii de business logic
│   ├── zoho.service.js
│   ├── eightx8.service.js
│   └── call-logic.service.js
├── utils/            # Utilitare (logger, etc.)
├── scripts/          # Scripturi auxiliare
├── data/             # Baza de date SQLite (generată automat)
├── server.js         # Server principal
├── package.json
└── Dockerfile
```

## Funcționalități

### Logica de Business

**Statusuri eligibile pentru apelare:**
- `New` - Lead/Contact nou, nu a fost apelat
- `No Answer` - Lead/Contact care nu a răspuns la apeluri anterioare

**Statusuri care opresc apelarea:**
- `Not interested / Rejected`
- `Dead`
- `Onboarding`
- `Recruiting`

### Reguli pentru Status = New

- `Call Attempts` trebuie să fie NULL sau 0
- `First No Answer At` trebuie să fie NULL
- Se face un singur apel
- Dacă apelul este `no_answer`, `busy` sau `failed`:
  - Status devine `No Answer`
  - `Call Attempts` devine 1
  - `First No Answer At` se setează la timestamp-ul curent
- Dacă apelul este `answered`:
  - `Call Attempts` crește cu 1
  - Status NU este schimbat (agentul îl schimbă manual în Zoho)

### Reguli pentru Status = No Answer

Un lead cu `No Answer` poate fi sunat maxim 7 ori, distribuite pe 3 zile:

- **Ziua 0** (prima zi de la `First No Answer At`): maxim 3 apeluri
- **Ziua 1**: maxim 2 apeluri
- **Ziua 2**: maxim 2 apeluri
- **Ziua 3 sau mai mult**: leadul devine `Dead`

### Ordinea de Apelare

La fiecare rulare a cron job-ului:
1. Mai întâi toate înregistrările cu `Status = New` (Leads + Contacts)
2. Apoi toate cu `Status = No Answer`

## Endpoints API

### `POST /api/cron`

Endpoint pentru cron job care procesează înregistrările eligibile și inițiază apelurile.

**Răspuns:**
```json
{
  "success": true,
  "message": "Cron job completed",
  "results": {
    "processed": 10,
    "called": 8,
    "errors": 0,
    "skipped": 2
  },
  "timestamp": "2025-12-10T10:00:00.000Z"
}
```

### `POST /api/callback`

Endpoint pentru callback-ul de la 8x8 după finalizarea apelului.

**Request Body:**
```json
{
  "zoho_id": "123456789",
  "record_type": "Lead",
  "call_status": "no_answer",
  "timestamp": "2025-12-10T10:05:00.000Z",
  "call_id": "8x8-call-id-123"
}
```

**Statusuri valide pentru `call_status`:**
- `answered` - Apel răspuns
- `no_answer` - Nu a răspuns
- `busy` - Linie ocupată
- `failed` - Apel eșuat

**Răspuns:**
```json
{
  "success": true,
  "message": "Callback processed successfully",
  "timestamp": "2025-12-10T10:05:01.000Z"
}
```

### `GET /api/stats`

Obține statistici despre apeluri și înregistrări.

**Răspuns:**
```json
{
  "success": true,
  "stats": {
    "today": {
      "total_records": 15,
      "total_attempts": 23
    },
    "recent_calls": 50,
    "timestamp": "2025-12-10T10:00:00.000Z"
  }
}
```

### `GET /health`

Health check endpoint.

### `GET /`

Endpoint principal cu informații despre serviciu.

## Configurare

### Variabile de Mediu

Creează fișierul `.env` bazat pe `.env.example`:

```bash
# Server Configuration
PORT=8080
NODE_ENV=production

# Zoho CRM Configuration
ZOHO_CLIENT_ID=your_zoho_client_id
ZOHO_CLIENT_SECRET=your_zoho_client_secret
ZOHO_REFRESH_TOKEN=your_zoho_refresh_token
ZOHO_API_DOMAIN=https://www.zohoapis.com

# 8x8 Configuration
EIGHTX8_API_KEY=your_8x8_api_key
EIGHTX8_API_SECRET=your_8x8_api_secret
EIGHTX8_BASE_URL=https://api.8x8.com
EIGHTX8_CALLBACK_URL=https://8x8.hero-log.com/api/callback

# Database
DB_PATH=./data/call_logs.db

# Cron Schedule (space-separated hours in 24h format)
CRON_HOURS=10 14 18

# Logging
LOG_LEVEL=info
```

### Configurare Zoho CRM

1. Creează o aplicație OAuth în Zoho Developer Console
2. Obține `client_id`, `client_secret` și `refresh_token`
3. Asigură-te că aplicația are acces la modulele `Leads` și `Contacts`

### Configurare 8x8

1. Obține API credentials de la 8x8
2. Configurează callback URL în 8x8: `https://8x8.hero-log.com/api/callback`
3. Ajustează `eightx8.service.js` conform documentației API 8x8

**Notă:** Implementarea actuală a `eightx8.service.js` este un template. Trebuie ajustată conform documentației reale a API-ului 8x8.

## Câmpuri Zoho Utilizate

Microserviciul folosește următoarele câmpuri din Zoho (Leads și Contacts):

- **Status** (picklist) - Statusul înregistrării
- **Call Attempts** (number) - Numărul de apeluri efectuate (poate fi NULL)
- **First No Answer At** (datetime) - Data primului no answer (poate fi NULL)
- **Phone** sau **Mobile** - Numărul de telefon pentru apelare

## Instalare și Rulare

### Local Development

```bash
# Instalează dependențe
npm install

# Rulează migrațiile bazei de date
npm run migrate

# Rulează în mod development
npm run dev
```

### Production cu Docker

```bash
cd /root/amedicase
docker-compose build service-8x8
docker-compose up -d service-8x8
```

## Cron Jobs

Microserviciul rulează automat de 3 ori pe zi la orele configurate în `CRON_HOURS` (implicit: 10:00, 14:00, 18:00 UTC).

Cron job-urile sunt configurate automat la pornirea serverului și rulează în timezone UTC.

Pentru a declanșa manual un cron job:
```bash
curl -X POST https://8x8.hero-log.com/api/cron
```

## Baza de Date

Microserviciul folosește SQLite pentru a stoca:
- **call_logs** - Log-uri zilnice de apeluri per lead/contact
- **call_history** - Istoric complet al tuturor apelurilor

Baza de date este creată automat la prima rulare în directorul `data/`.

## Logging

Logurile sunt salvate în:
- `error.log` - Doar erori
- `combined.log` - Toate logurile

Nivelul de logging poate fi configurat prin `LOG_LEVEL` în `.env`.

## Deployment

Serviciul este configurat în `docker-compose.yml` cu:
- Traefik pentru routing
- Let's Encrypt pentru SSL automat
- Port intern: 8080
- Restart policy: unless-stopped

### Pași pentru deployment:

1. Asigură-te că subdomeniul `8x8.hero-log.com` este configurat în DNS să pointeze către serverul tău

2. Configurează variabilele de mediu în `.env`

3. Construiește și pornește serviciul:
```bash
cd /root/amedicase
docker-compose build service-8x8
docker-compose up -d service-8x8
```

4. Verifică statusul:
```bash
docker-compose ps service-8x8
docker-compose logs service-8x8
```

5. Testează serviciul:
```bash
curl https://8x8.hero-log.com/health
curl -X POST https://8x8.hero-log.com/api/cron
```

## SSL/Let's Encrypt

SSL-ul este configurat automat prin Traefik. Certificatul Let's Encrypt este generat automat pentru domeniul `8x8.hero-log.com`.

### Configurare Certificat

Certificatul SSL este configurat **exclusiv pentru `8x8.hero-log.com`** (subdomeniu al `hero-log.com`):

- ✅ **Domeniu acoperit**: `8x8.hero-log.com` (single-domain certificate)
- ✅ **Emitent**: Let's Encrypt (R13)
- ✅ **Metodă de validare**: TLS Challenge (HTTP-01)
- ✅ **Storage**: `/letsencrypt/acme.json` în containerul Traefik
- ✅ **Auto-renewal**: Certificatul se reînnoiește automat înainte de expirare

### Verificare Status SSL

```bash
# Verifică certificatul pentru domeniul principal
echo | openssl s_client -showcerts -servername 8x8.hero-log.com -connect 8x8.hero-log.com:443 2>&1 | openssl x509 -noout -subject -issuer -dates

# Testează conexiunea HTTPS
curl -v https://8x8.hero-log.com

# Verifică DNS
nslookup 8x8.hero-log.com
```

### Troubleshooting

**Dacă certificatul nu funcționează:**

1. **Verifică că porturile 80 și 443 sunt deschise:**
   ```bash
   sudo ufw status | grep -E "80|443"
   ```

2. **Verifică că DNS-ul este configurat corect:**
   ```bash
   nslookup 8x8.hero-log.com
   # Trebuie să returneze IP-ul serverului
   ```

3. **Verifică logurile Traefik pentru erori ACME:**
   ```bash
   docker logs donor-traefik 2>&1 | grep -i "acme\|certificate\|8x8\|hero-log"
   ```

**Important**: Asigură-te că:
- Portul 80 și 443 sunt deschise în firewall
- DNS-ul pentru `8x8.hero-log.com` este configurat corect și pointează către server
- Traefik rulează și este conectat la rețeaua `donor-auto-evacuator_donor-network`
- Serviciul `service-8x8` rulează și este conectat la rețeaua Traefik

## Izolare și Siguranță

✅ **Microserviciul este complet izolat:**
- ❌ **NU are dependențe** de alte servicii (db, strapi, frontend)
- ❌ **NU folosește volume-uri partajate**
- ❌ **NU folosește rețeaua webnet** (doar traefik pentru routing)
- ✅ **Propriul domeniu unic**: `8x8.hero-log.com`
- ✅ **Propriul port intern**: 8080 (nu interferează cu 3000 sau 1337)
- ✅ **Routing Traefik specific** - nu afectează alte domenii
- ✅ **Poate rula independent** - nu necesită alte servicii

**Garantat că nu va afecta:**
- `amedicase.com` / `www.amedicase.com` (frontend-prod)
- `dev.amedicase.com` (frontend-dev, strapi)
- Baza de date PostgreSQL
- Orice alt serviciu existent

## Note Importante

1. **8x8 API Integration**: Implementarea actuală a serviciului 8x8 este un template. Trebuie ajustată conform documentației reale a API-ului 8x8 pentru autentificare și inițierea apelurilor.

2. **Zoho API**: Asigură-te că token-ul OAuth are permisiuni pentru citire și scriere în modulele Leads și Contacts.

3. **Call Logs**: Baza de date SQLite stochează log-urile zilnice pentru a gestiona limitele de apeluri per zi.

4. **Error Handling**: Toate erorile sunt loggate și nu opresc execuția pentru alte înregistrări.

5. **Phone Validation**: Numerele de telefon sunt validate și formatate înainte de a fi trimise la 8x8.
