const { ObjectId } = require('mongodb');
const Config = require('../libs/config');
const MongoDB = require('../libs/mongodb');
const Security = require('../libs/security');

const COLLECTION_NAME = Config.getConfigOptions('USERS_COLLECTION_NAME');

const UserModel = {};

UserModel.signUp = async (email, password, firstName, lastName) => {

  const encryptedPassword = Security.encryptText(password);
  const token = Security.createJWT({});
  const collection = await MongoDB.getCollection();
  let user = await collection.insertOne({
    email,
    password: encryptedPassword,
    firstName,
    lastName,
    token
  });
  user = user.ops[0];

  return {
    email: user.email,
    token: user._id
  }
};

UserModel.signIn = async (email, password) => {

  const collection = await getCollection();
  const user = await collection.findOne({ email });
  const passwordIdValid = await Security.isHashValid(password, user.password);

  if ( ! passwordIdValid ) return null;

  return {
    email: user.email,
    token: user._id
  }
};

UserModel.getUserAuthByToken = async (token) => {

  const collection = await getCollection();
  let user = null;
  try {
    user = await collection.findOne({ _id: ObjectId(token)});
  } catch (e) {
    console.error(e.message);
    return null;
  }
  if (user === null) return null;

  return {
    email: user.email,
    token: user._id
  }
};

module.exports = UserModel;