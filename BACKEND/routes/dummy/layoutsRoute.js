const { Router } = require('express');
const app = Router();
const layouts = require('../controllers/layoutsController');

app.get('/layouts', layouts);

module.exports = app;