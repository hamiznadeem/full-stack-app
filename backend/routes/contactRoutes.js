const express = require('express');
const Router = express.Router();
const contactController = require('../controllers/contactController');

Router.get('/', contactController.getContact);

Router.post('/', contactController.postContact);

Router.put('/:id', contactController.putContact);

Router.delete('/:id', contactController.deleteContact);

module.exports = Router;