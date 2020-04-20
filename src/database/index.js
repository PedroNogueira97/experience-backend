const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/Users');
const Client = require('../models/Clients');

const connection = new Sequelize(dbConfig);

User.init(connection);
Client.init(connection);


module.exports = connection;