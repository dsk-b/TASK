const { Router } = require('express');
const app = Router();
const root = require('../controllers/rootController');

app.get("/", root);

module.exports = app;