const User = require("../../models/users");

module.exports = async(req, res, next) => {
    try {
        if (req.user.role !== 'Admin' && req.user.role !== 'Agent') {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Unauthorized"
                }]
            }
        }

        const users = await User.find({role: 'Customer'}, 'username role');
        
        res.send(users);

    }catch(err){
        next(err);
    }
}