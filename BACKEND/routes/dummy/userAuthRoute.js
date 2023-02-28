const {Router} = require('express');
const app = Router();
const userAuth = require("../controllers/userAuthController");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.post("/userAuth",jsonParser,userAuth);

module.exports = app;