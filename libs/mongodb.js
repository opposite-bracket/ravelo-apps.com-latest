const Config = require('../libs/config');

const MONGO_URL = Config.getConfigOptions('MONGO_URL')
const MONGO_DB_NAME = Config.getConfigOptions('MONGO_URL')

const getCollection = async (collectionName) => {
  const MongoClient = require('mongodb').MongoClient;
  const client = await MongoClient.connect(MONGO_URL,{
    useNewUrlParser: true
  });
  const db = client.db(MONGO_DB_NAME);
  return db.collection(collectionName);
};

module.exports = {
  getCollection,
};