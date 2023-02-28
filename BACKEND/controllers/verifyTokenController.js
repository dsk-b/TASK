const jwt = require('jsonwebtoken');

module.exports = (req,res)=>{
    jwt.verify(req.headers.at, 'at', (err, verifiedJwt) => {
      if(err){
        res.send(false);
      }else{
        res.send(true);
      }
    });
}