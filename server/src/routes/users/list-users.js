const User = require("../../models/users");

module.exports = async(req, res, next) => {
    try {

        const users = await User.find({role: 'Customer'}, 'username role');
        
        res.send(users);

    }catch(err){
        next(err);
    }
}