const l = 'mongodb+srv://dbUser:dbUserPassword@atlascluster.f7ytsdr.mongodb.net/dummy?retryWrites=true&w=majority';
const { MongoClient} = require("mongodb");

module.exports=(req, res)=>{
    const layoutValue = req.params.layoutValue;
    MongoClient.connect(l, (err, db) => {
        if (err) throw err;
        var dbo = db.db("dummy");
        dbo.collection("forms").find({ layout: layoutValue }).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    })
}