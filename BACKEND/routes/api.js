const router = require('express').Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const allForms = require("../controllers/getAllFormsController");
const userAuth = require("../controllers/userAuthController");
const formsByLayout = require('../controllers/formsByLayoutController');
const layouts = require('../controllers/layoutsController');
const pincodes = require("../controllers/pincodesController");
const root = require('../controllers/rootController');
const signUp = require("../controllers/signupController");
const verifyToken = require("../controllers/verifyTokenController");

router.get("/forms", allForms);
router.get("/forms/:layoutValue", formsByLayout);
router.get('/layouts', layouts);
router.get("/pincode/:pin", pincodes);
router.get("/", root);
router.get("/verifytoken",verifyToken);

router.post("/signup", jsonParser, signUp);
router.post("/userAuth", jsonParser, userAuth);


module.exports = router;