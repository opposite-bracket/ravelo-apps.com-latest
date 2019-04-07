const UserModel = require('../models/users');

const checkAuthTokenMiddleware = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    let token;
    const parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      const [scheme, credentials] = parts;

      if (/^Bearer$/i.test(scheme)) { // or any other scheme you are using
        token = credentials;
      }

      if (token === undefined) return res.sendStatus(403);

      const user = await UserModel.getUserAuthByToken(token);

      if (user === null) return res.sendStatus(403);

      res.locals.user = user;

      return next();
    }
  } else {
    return res.sendStatus(403);
  }

};

module.exports = checkAuthTokenMiddleware;