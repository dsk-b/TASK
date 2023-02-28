const { MongoClient } = require("mongodb");
const l = 'mongodb+srv://dbUser:dbUserPassword@atlascluster.f7ytsdr.mongodb.net/dummy?retryWrites=true&w=majority';

module.exports = (req, res) => {
    var a = req.body;
    console.log(a);
    MongoClient.connect(l, (err, db) => {
        if (err) throw err;
        var dbo = db.db("dummy");
        dbo.collection("userdetails").insertOne(a, function (err, result) {
            if (err) throw err;
            if (result.acknowledged === true) {
                console.log("1 doc inserted");
            }
            db.close();
        })
    })
    res.send("Yes");
}