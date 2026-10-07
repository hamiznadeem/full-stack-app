const express = require('express');
const Router = express.Router();
const contactController = require('../controllers/contactController');

Router.get('/', contactController.getContact);

Router.get('/', contactController.postContact);

Router.get('/:id', contactController.putContact);

Router.get('/:id', contactController.deleteContact);

module.exports = Router;