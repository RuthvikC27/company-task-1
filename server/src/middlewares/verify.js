const jwt = require("jsonwebtoken");

function verify(req, res, next){        
    try{
        // console.log(req.headers['authorize']);
        const token = req.headers['authorize'].split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded.data;

        // console.log(req.user);
        next();
    }catch(err){
        next({
            statusCode: 401,
            errors: [{
                msg: "Not authorized"
            }]
        })
    }
}

module.exports = verify;