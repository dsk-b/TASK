const jwt = require('jsonwebtoken');
const { MongoClient } = require("mongodb");
const l = 'mongodb+srv://dbUser:dbUserPassword@atlascluster.f7ytsdr.mongodb.net/dummy?retryWrites=true&w=majority';

module.exports = (req, res) => {
    var x = req.body;
    MongoClient.connect(l, (err, db) => {
        if (err) throw err;
        var dbo = db.db("dummy");
        dbo.collection("userdetails").find({ email: `${x.email}`, password: `${x.password}` })
            .toArray(function (err, result) {
                if (err) throw err;
                if (result[0].email === x.email && result[0].password === x.password) {
                    var t = jwt.sign(result[0].email, 'at');
                    //--------- SENDING AUTHORIZED USER STATUS CODE + ACCESStOKEN ------------;
                    res.json({ code: 200, accessToken: t });
                } else {
                    //--------- SENDING UNAUTHORIZED USER STATUS CODE ------------;
                    res.json({ code: 401 });
                }
                db.close();
            })
    })
}