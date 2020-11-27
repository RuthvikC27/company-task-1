const Loan = require("../../models/loans");

module.exports = async(req, res, next) => {
    try{
        const loan = await Loan.findOne({ _id: req._id})

        const temp = await loan;
        temp.status = req.status;

        await Loan.updateOne({ _id: id }, temp);

        res.send("Successfully changed state")

    }catch(err){
        next(err);
    } 
}