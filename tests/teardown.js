after(async () => {
  const MongoClient = require('mongodb').MongoClient;
  const client = await MongoClient.connect('mongodb://mongo:27017',{
    useNewUrlParser: true
  });
  const db = client.db('ims');
  await db.dropDatabase();
});