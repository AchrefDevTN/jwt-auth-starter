const express = require('express');
const app = express();
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
