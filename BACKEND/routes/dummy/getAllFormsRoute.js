const { Router } = require("express");
const allForms = require("../controllers/getAllFormsController");
const app = Router();

app.get("/forms", allForms);

module.exports = app;