
module.exports = async(req, res, next) => {
    try {
        if (req.user.role !== 'Agent') {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Unauthorized"
                }]
            }
        }

        
        res.send('create request');

    }catch(err){
        next(err);
    }
}