const common = require('./components/common');
const logger = require('./components/logger');
// const redis = require('./providers/redis')
const server = require('./components/server');

module.exports = { ...common, ...logger, ...server };
