const Loan = require("../../models/loans");

module.exports = async(req, res, next) => {
    try{
        const loans = await Loan.find({});


        res.send(loans)

    }catch(err){
        next(err);
    } 
}