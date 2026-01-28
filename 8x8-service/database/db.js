const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');
const config = require('../config');

// Ensure data directory exists
const dbDir = path.dirname(config.database.path);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(config.database.path, (err) => {
  if (err) {
    logger.error('Error opening database:', err);
    throw err;
  }
  logger.info('Connected to SQLite database');
});

// Initialize database schema
db.serialize(() => {
  // Call logs table - tracks daily call attempts per lead/contact
  db.run(`
    CREATE TABLE IF NOT EXISTS call_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      zoho_id TEXT NOT NULL,
      record_type TEXT NOT NULL,
      call_date DATE NOT NULL,
      attempts_today INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(zoho_id, record_type, call_date)
    )
  `);

  // Call history table - tracks all call attempts
  db.run(`
    CREATE TABLE IF NOT EXISTS call_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      zoho_id TEXT NOT NULL,
      record_type TEXT NOT NULL,
      call_status TEXT NOT NULL,
      eightx8_call_id TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Indexes for performance
  db.run(`CREATE INDEX IF NOT EXISTS idx_call_logs_zoho_id ON call_logs(zoho_id, record_type)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_call_logs_date ON call_logs(call_date)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_call_history_zoho_id ON call_history(zoho_id, record_type)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_call_history_timestamp ON call_history(timestamp)`);
});

// Promisify database methods
const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve({ lastID: this.lastID, changes: this.changes });
      }
    });
  });
};

const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const dbAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = {
  db,
  dbRun,
  dbGet,
  dbAll,
};



