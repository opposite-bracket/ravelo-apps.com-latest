const JWT = require('jsonwebtoken');
const BCrypt = require('bcryptjs');
const Config = require('./config');

const JWT_SECURITY_KEY = Config.getConfigOptions('JWT_SECURITY_KEY');
const JWT_TOKEN_SALT_ROUNDS = Config.getConfigOptions('JWT_TOKEN_SALT_ROUNDS');

const encryptText = async (plain) => {
  return await BCrypt.hash(plain, JWT_TOKEN_SALT_ROUNDS);
};

const checkHashedText = async (plain, encrypted) => {
  return await BCrypt.compare(plain, encrypted);
};

const createJWT = (data) => {
  const token = JWT.sign(data, JWT_SECURITY_KEY);

  return token;
};

const isHashValid = (plainPassword, encryptedPassword) => {
  return BCrypt.compare(plainPassword, encryptedPassword);
};

module.exports = {
  createJWT,
  encryptText,
  checkHashedText,
  isHashValid
};