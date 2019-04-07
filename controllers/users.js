const Router = require('express').Router();
const Validator = require('express-joi-validation')({});
const CheckAuthTokenMiddleware = require('../middlewares/auth');
const Joi = require('joi');
const UserModel = require('../models/users');

const signUpQuery = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required()
});

Router.post('/sign-up', Validator.body(signUpQuery), async (req, res) => {
  const body = req.body;

  const user = await UserModel.signUp(
    body.email,
    body.password,
    body.firstName,
    body.lastName
  );

  return res.send({
    data: user
  });
});

Router.post('/sign-in', Validator.body(signUpQuery), async (req, res) => {
  const body = req.body;

  const user = await UserModel.signIn(body.email, body.password);

  if (user === null) return res.sendStatus(400);

  return res.send({
    data: user
  });
});

Router.get('/current', CheckAuthTokenMiddleware, async (req, res) => {

  return res.send({
    data: res.locals.user
  });
});

module.exports = Router;