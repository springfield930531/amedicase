const express = require('express');
const cron = require('node-cron');
const logger = require('./utils/logger');
const config = require('./config');
const apiRoutes = require('./routes/api');
const callLogicService = require('./services/call-logic.service');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '8x8 Auto-Dialer Microservice',
    version: '2.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Setup cron jobs
const setupCronJobs = () => {
  const hours = config.cron.hours;
  
  hours.forEach((hour) => {
    // Schedule cron job for each configured hour
    // Format: minute hour * * * (runs at minute 0 of specified hour)
    const cronExpression = `0 ${hour} * * *`;
    
    cron.schedule(cronExpression, async () => {
      logger.info(`Cron job triggered at ${hour}:00`);
      try {
        await callLogicService.processEligibleRecords();
        logger.info(`Cron job completed successfully at ${hour}:00`);
      } catch (error) {
        logger.error(`Cron job failed at ${hour}:00:`, error);
      }
    }, {
      scheduled: true,
      timezone: 'UTC',
    });

    logger.info(`Scheduled cron job for ${hour}:00 UTC`);
  });
};

// Start server
const PORT = config.server.port;
app.listen(PORT, '0.0.0.0', () => {
  logger.info(`8x8 Auto-Dialer microservice running on port ${PORT}`);
  logger.info(`Environment: ${config.server.nodeEnv}`);
  logger.info(`Cron hours: ${config.cron.hours.join(', ')}`);
  
  // Setup cron jobs
  setupCronJobs();
  
  logger.info('Server started successfully');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});
