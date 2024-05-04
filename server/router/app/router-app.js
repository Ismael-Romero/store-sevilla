const express = require('express');
const routerApp = express.Router();

routerApp.get('/', require('./home'));
routerApp.get('/about', require('./about'));
routerApp.get('/cart', require('./cart'));
routerApp.get('/discounts', require('./discounts'));
routerApp.get('/contact', require('./contact'));
routerApp.get('/login', require('./login'));
routerApp.get('/register', require('./register'));
routerApp.get('/policies', require('./policies'));
routerApp.get('/info', require('./info'));

module.exports = routerApp;