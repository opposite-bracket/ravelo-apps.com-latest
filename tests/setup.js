const Server = require('../');
const Chai = require('chai');
const ChaiHttp = require('chai-http');
const Config = require('../libs/config');
const client = require('../models');

Chai.should();
Chai.use(ChaiHttp);

const TEST_URL = Config.getConfigOptions('TEST_URL');

const App = ( TEST_URL ) ? TEST_URL : Server.App;

before(async () => {

});

global.Client = client;
global.App = App;
global.Chai = Chai;
global.Should = Chai.should();
