const express = require('express');
const UsersController = require('./controllers/UsersController');
const ClientsController = require('./controllers/ClientsController');
const AuthController = require('./controllers/AuthController');


const routes = express.Router();

routes.post('/auth', AuthController.create);

routes.post('/users', UsersController.store);
routes.post('/clients', ClientsController.store);

routes.get('/users', UsersController.index);
routes.get('/users/:user_id', UsersController.getFromId);
routes.get('/clients', ClientsController.index);
routes.get('/clients/:client_id', ClientsController.getFromId);

module.exports = routes;