const { db } = require('../database/db');
const logger = require('../utils/logger');

logger.info('Running database migrations...');

// Migrations are handled automatically in database/db.js
// This script can be used for additional migrations if needed

db.close((err) => {
  if (err) {
    logger.error('Error closing database:', err);
    process.exit(1);
  }
  logger.info('Database migrations completed');
  process.exit(0);
});



