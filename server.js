const Express = require('express');
const BodyParser = require('body-parser');
const Config = require('./libs/config');
const Package = require('./package');
const UsersRouter = require('./controllers/users');

const NODE_ENV = Config.getConfigOptions('NODE_ENV');
const PORT = Config.getConfigOptions('PORT');
const BUILD_NUMBER = Config.getConfigOptions('BUILD_NUMBER');

const initServer = () => {
  const App = Express();

  App.use(BodyParser.json());

  App.use(function (req, res, next) {
    res.removeHeader('X-Powered-By');
    res.set('version', Package.version);
    res.set('service', Package.name);
    res.set('build', BUILD_NUMBER);
    next();
  });

  if (NODE_ENV === 'production') {
    App.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
  }

  App.use('/api/ims/users', UsersRouter);
  if (require.main === module) {
    console.log(`Running app under port: ${PORT}`);
    App.listen(PORT);
  }

};

module.exports.App = initServer();