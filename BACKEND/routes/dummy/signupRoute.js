const { Router } = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = Router();

const signUp = require("../controllers/signupController")

app.post("/signup", jsonParser, signUp);

module.exports =app;