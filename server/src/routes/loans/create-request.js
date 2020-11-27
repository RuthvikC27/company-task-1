const Loan = require("../../models/loans");
const User = require("../../models/users");
const {
    body
} = require("express-validator");

const expressValidatorLoanObject = [
    body('customer').trim().equals('').withMessage("customer field cannot be empty"),
    body('amount').trim().equals('').withMessage("amount field cannot be empty"),
    body('duration').trim().equals('').withMessage("duration field cannot be empty"),
]

const createLoanRequest = async (req, res, next) => {
    try {
        if (req.user.role !== 'Agent') {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Unauthorized"
                }]
            }
        }

        const {
            customer,
            amount,
            duration
        } = req.body;

        const user = await User.findOne({
            username: customer
        });
        if (!user) {
            throw {
                statusCode: 401,
                errors: [{
                    msg: "Customer does not exist"
                }]
            }
        }

        const loan = new Loan({
            customer,
            amount,
            duration
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