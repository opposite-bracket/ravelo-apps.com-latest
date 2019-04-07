const MongoClient = require('mongodb').MongoClient;
const Config = require('../libs/config');

const MONGO_URL = Config.getConfigOptions('MONGO_URL');

const connect = async () => {
  const client = await MongoClient.connect(MONGO_URL,{
    useNewUrlParser: true
  });
  return client;
};

module.export = connect();