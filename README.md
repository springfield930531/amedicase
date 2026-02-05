# AMEDICASE - Site cu Strapi CMS

Site modern cu Next.js, Strapi CMS și PostgreSQL, configurat pentru dezvoltare și producție.

## 📋 Structură

- **Frontend Development**: `dev.amedicase.com` - Next.js în mod development
- **Frontend Production**: `amedicase.com` - Next.js în mod producție  
- **Strapi Admin**: `dev.amedicase.com/admin` (dev) și `amedicase.com/admin` (prod)
- **Strapi API**: `dev.amedicase.com/api` (dev) și `amedicase.com/api` (prod)

## 🚀 Comenzi utile

### Pornirea serviciilor
```bash
cd /root/amedicase
docker compose up -d
```

### Pornire stack producție (Strapi + frontend-prod)
```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod up -d --build
```

### Pornire frontend dev pe server (opțional)
```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod --profile dev up -d frontend-dev
```

### Oprirea serviciilor
```bash
docker compose down
```

### Rebuild după modificări
```bash
docker compose up -d --build
```

### Vizualizare logs
```bash
# Toate serviciile
docker compose logs -f

# Un serviciu specific
docker compose logs -f frontend-dev
docker compose logs -f strapi
docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod logs -f strapi-prod
```

### Status servicii
```bash
docker compose ps
```

## 🔧 Configurare Cloudflare

### DNS Records

1. **dev.amedicase.com** (A record)
   - IP: `149.102.141.203`
   - Proxy: **DNS Only** (gri) - pentru development

2. **amedicase.com** (A record)
   - IP: `149.102.141.203`
   - Proxy: **Proxied** (portocaliu) - pentru producție

### SSL/TLS

- **Mode**: Full (nu Strict) - pentru că serverul primește HTTPS din Cloudflare
- Cloudflare gestionează automat certificatul pentru HTTPS

## 📝 First-time Setup pentru Strapi

La prima accesare a `dev.amedicase.com/admin`, vei fi rugat să:
1. Creezi un cont de administrator
2. Completezi datele (email, parolă, nume, prenume)

După crearea contului, vei avea acces la:
- **Content Manager**: Gestionează conținutul site-ului
- **Content-Type Builder**: Creează tipuri de conținut noi
- **Settings**: Configurări generale, permisiuni, API

## 🔒 Securitate - Recomandări

1. **Schimbă parola default pentru PostgreSQL** în `docker-compose.yml`:
   ```yaml
   POSTGRES_PASSWORD: your-secure-password
   DATABASE_PASSWORD: your-secure-password
   ```

2. **Regenerează cheile secrete** (opțional, dar recomandat):
   ```bash
   openssl rand -hex 16  # Folosește pentru APP_KEYS, API_TOKEN_SALT, etc.
   ```

3. **Backup baza de date**:
   ```bash
   docker compose exec db pg_dump -U strapi strapi > backup_$(date +%Y%m%d).sql
   ```

## 🔄 Deploy la producție

Când ești gata să publichi pe producție:

1. **Generează secretele de producție** (creează `.env.prod` cu valori reale):
   ```bash
   bash scripts/gen-secrets.sh
   ```

2. **Pornește stack-ul de producție** (folosește override-ul de prod):
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod up -d --build
   ```

3. **Verifică producția**:
   - Accesează `https://amedicase.com`
   - Verifică logs: `docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod logs -f frontend-prod`

> Notă: `.env.example` conține doar placeholder-e. Nu folosi `.env` cu substituții shell pentru producție.

## 🔁 Refresh cache (ISR) la cerere

Unele rute rămân **statice/ISR** (ex: `/` + site settings pentru header/footer/SEO) și se actualizează automat după `revalidate` (ex: 300s).

Pentru update imediat (fără să aștepți), setează `REVALIDATE_SECRET` în `.env.prod` și apelează:

```bash
curl -X POST "https://amedicase.com/api/revalidate?secret=REVALIDATE_SECRET&path=/"
```

Poți configura și un webhook în Strapi (Publish/Unpublish) către aceeași adresă.

## 🩺 Diagnostic server

- **Status + logs rapide**:
  ```bash
  bash scripts/server/health-check.sh
  ```
- **Recovery safe (fără ștergere de volume)**:
  ```bash
  bash scripts/server/recover-docker.sh
  ```

## 📁 Structura proiectului

```
/root/amedicase/
├── docker-compose.yml    # Configurare servicii
├── frontend/             # Next.js application
│   ├── Dockerfile        # Build producție
│   ├── Dockerfile.dev    # Build development
│   └── src/              # Cod sursă Next.js
├── nginx/                # Configuri Nginx (nu sunt folosite acum - Traefik rulează)
└── README.md             # Acest fișier
```

## 🐛 Troubleshooting

### Containerul nu pornește
```bash
docker compose logs [nume-serviciu]
docker compose ps
```

### Baza de date nu se conectează
```bash
# Verifică healthcheck
docker compose exec db pg_isready -U strapi

# Conectare manuală
docker compose exec db psql -U strapi strapi
```

### Frontend dev nu se actualizează
- Verifică că volume-ul este montat corect
- Restart: `docker compose restart frontend-dev`
- Rebuild: `docker compose up -d --build frontend-dev`

### Strapi admin nu se deschide
- Verifică logs: `docker compose logs -f strapi`
- Verifică routing Traefik: containerul trebuie să fie pe rețeaua `traefik`
- Accesează direct: `docker compose exec strapi curl localhost:1337/admin`
- Pentru producție: `docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod exec strapi-prod curl localhost:1337/admin`

## 📚 Resurse utile

- [Strapi Documentation](https://docs.strapi.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Traefik Documentation](https://doc.traefik.io/traefik/)

## ✅ Checklist finalizare setup

- [ ] DNS-urile sunt configurate corect în Cloudflare
- [ ] SSL/TLS este activat în Cloudflare (mode: Full)
- [ ] Contul de admin Strapi este creat
- [ ] Frontend dev funcționează pe `dev.amedicase.com`
- [ ] Frontend prod funcționează pe `amedicase.com`
- [ ] Strapi admin este accesibil pe `dev.amedicase.com/admin` și `amedicase.com/admin`
- [ ] Parolele sunt schimbate din default
- [ ] Backup-urile sunt programate (opțional, dar recomandat)



# amedicase
