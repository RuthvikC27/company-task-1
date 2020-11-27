const Loan = require("../../models/loans");

module.exports = async(req, res, next) => {
    try{
        if(req.user.role !== 'Customer'){
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Not authorized"
                }]
            }
        }

        const loans = await Loan.find({ username: req.user.username})


        res.send(loans)

    }catch(err){
        next(err);
    }
    

}