module.exports = async(req, res, next) => {
    console.log(req.user);
    try {
        if (req.user.role !== 'Admin' && req.user.role !== 'Agent') {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Unauthorized"
                }]
            }
        }

        next();

    }catch(err){
        next(err);
    }
}