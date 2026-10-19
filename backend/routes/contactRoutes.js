const express = require('express');
const Router = express.Router();
const contactController = require('../controllers/contactController');
const upload = require('../middleware/upload');

Router.get('/', contactController.getContact);

Router.post('/', upload.single('image'), contactController.postContact);

Router.put('/:id', upload.single('image'), contactController.putContact);

Router.delete('/:id', contactController.deleteContact);

module.exports = Router;