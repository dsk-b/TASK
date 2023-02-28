const {Router} = require('express');

const app = Router();
const formsByLayout = require('../controllers/formsByLayoutController');

app.get("/forms/:layoutValue", formsByLayout);

module.exports = app;