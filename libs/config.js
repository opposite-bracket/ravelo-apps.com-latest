/**
 * We are loading the node environment first
 * so we don't have to rely on a .env file
 * existing.
 */
const NODE_ENV = process.env.NODE_ENV || 'production';

require('dotenv').config({
  path: `./.env.${NODE_ENV}`
});

const VALID_OPTIONS = [
  'USERS_COLLECTION_NAME',
  'BUILD_NUMBER',
  'PORT',
  'NODE_ENV',
  'JWT_SECURITY_KEY',
  'JWT_TOKEN_SALT_ROUNDS',
  'TEST_URL',
  'MONGO_URL'
];

const getConfigOptions = (option) => {
  if ( VALID_OPTIONS.indexOf(option) === -1 ) {
    throw new Error(`Invalid option ${option}`);
  }

  if ( option === NODE_ENV ) return NODE_ENV;

  return process.env[option];
};

module.exports = {
  getConfigOptions
};