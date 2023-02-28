const express = require("express");
const app = new express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const userAuth = require('./routes/userAuthRoute');
// const layouts = require('./routes/layoutsRoute');
// const root = require("./routes/rootRoute");
// const signUp = require("./routes/signupRoute");
// const formsByLayout = require("./routes/formsByLayoutRoute");
// const pincodes = require("./routes/pincodesRoute");
// const allForms = require("./routes/getAllFormsRoute");
const apiroutes = require("./routes/api");
//----------------------- ASSIGNING PORT NUMBER -----------------------
const PORT = 3000;
//----------------------- ************* -----------------------
app.use(bodyParser.urlencoded({
    extended: true
}));
//------------------------ ALLOWING CROSS ORIGINS -----------------------
app.use(cors({
    origin: '*'
}));
//------------------------ ROUTES ---------------------------------------
// app.use(signUp);
// app.use(userAuth);
// app.use(layouts);
// app.use(root);
// app.use(formsByLayout);
// app.use(pincodes);
// app.use(allForms);
app.use(apiroutes);
//------------------------ SERVER IS RUNNING ON PORT 3000 ---------------
app.listen(3000, (err) => {
    err?console.log(err):console.log(`server listening on PORT ${PORT}`);
});
