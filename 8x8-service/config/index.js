require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 8080,
    nodeEnv: process.env.NODE_ENV || 'production',
  },
  zoho: {
    clientId: process.env.ZOHO_CLIENT_ID,
    clientSecret: process.env.ZOHO_CLIENT_SECRET,
    refreshToken: process.env.ZOHO_REFRESH_TOKEN,
    tokenUrl: process.env.ZOHO_TOKEN_URL || 'https://accounts.zoho.eu/oauth/v2/token',
    apiDomain: process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.eu',
  },
  eightx8: {
    apiKey: process.env.EIGHTX8_API_KEY,
    apiSecret: process.env.EIGHTX8_API_SECRET,
    baseUrl: process.env.EIGHTX8_BASE_URL || 'https://api.8x8.com',
    callbackUrl: process.env.EIGHTX8_CALLBACK_URL || 'https://8x8.hero-log.com/api/callback',
  },
  database: {
    path: process.env.DB_PATH || './data/call_logs.db',
  },
  cron: {
    hours: (process.env.CRON_HOURS || '10 14 18').split(' ').map(Number),
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};

