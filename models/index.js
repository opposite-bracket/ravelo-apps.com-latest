const MongoClient = require('mongodb').MongoClient;
const Config = require('../libs/config');

const MONGO_URI = Config.getConfigOptions('MONGO_URI');

const connect = async () => {
  const client = await MongoClient.connect(MONGO_URI,{
    useNewUrlParser: true
  });
  return client;
};

module.export = connect();