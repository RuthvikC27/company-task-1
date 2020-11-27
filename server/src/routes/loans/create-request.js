const Loan = require("../../models/loans");
const User = require("../../models/users");
const {
    body
} = require("express-validator");

const expressValidatorLoanObject = [
    body('customer').trim().notEmpty().withMessage("customer field cannot be empty"),
    body('amount').trim().notEmpty().withMessage("amount field cannot be empty"),
    body('duration').trim().notEmpty().withMessage("duration field cannot be empty"),
]

const createLoanRequest = async (req, res, next) => {
    // console.log(req.body);
    try {
        
        const {
            customer,
            amount,
            duration
        } = req.body;

        const user = await User.findOne({
            username: customer,
            role: "Customer"
        });
        if (!user) {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Customer name does not exist"
                }]
            }
        }

        const loan = new Loan({
            username: customer,
            amount: parseInt(amount),
            duration: parseInt(duration)
        });

        loan.save();

        res.send('Successfully loan request created!');

    } catch (err) {
        next(err);
    }
}

module.exports = {
    createLoanRequest,
    expressValidatorLoanObject
}