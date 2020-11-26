const jwt = require("jsonwebtoken");

function verify(req, res, next){        
    try{
        const token = req.headers['authorize'].split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded.data;

        // console.log(req.user);
        next();
    }catch(err){
        next({
            statusCode: 403,
            errors: [{
                msg: "Not authorized"
            }]
        })
    }
}

module.exports = verify;