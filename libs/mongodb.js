const Config = require('../libs/config');

const MONGO_URI = Config.getConfigOptions('MONGO_URI');
const MONGO_DB_NAME = Config.getConfigOptions('MONGO_DB_NAME');

const getCollection = async (collectionName) => {
  const MongoClient = require('mongodb').MongoClient;
  const client = await MongoClient.connect(MONGO_URI,{
    useNewUrlParser: true
  });
  const db = client.db(MONGO_DB_NAME);
  return db.collection(collectionName);
};

module.exports = {
  getCollection,
};