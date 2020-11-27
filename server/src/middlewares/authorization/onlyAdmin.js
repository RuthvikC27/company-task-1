module.exports = (req, res, next) => {
    try{
        if(req.user.role !== 'Admin'){
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Not authorized"
                }]
            }
        }

        next();

    }catch(err){
        next(err);
    } 
}