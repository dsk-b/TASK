const { MongoClient } = require("mongodb");
const l = 'mongodb+srv://dbUser:dbUserPassword@atlascluster.f7ytsdr.mongodb.net/dummy?retryWrites=true&w=majority';

module.exports = (req, res) => {
    MongoClient.connect(l, (err, db) => {
        if (err) throw err;
        var dbo = db.db("dummy");
        dbo.collection("forms").find({}).project({ layout: 1, _id: 0 }).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    })
}