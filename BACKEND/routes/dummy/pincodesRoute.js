const { Router } = require("express");
const pincodes = require("../controllers/pincodesController");
const app = Router();

app.get("/pincode/:pin", pincodes);

module.exports = app;