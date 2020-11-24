const Users = require('../../models/users');
const {
    body
} = require("express-validator");

const expressValidatorRegister = [
    body('username').trim().isLength({
        min: 4,
        max: 20
    }).withMessage("username must be valid"),
    body('email').trim().isEmail().withMessage("Email must be valid"),
    body('password').trim().isLength({
        min: 4,
        max: 20
    }).withMessage("Password must be between 4 and 20 characters"),
    body('confirmPassword').trim().isLength({
        min: 4,
        max: 20
    }).withMessage("Confirm password must be between 4 and 20 characters"),
]

const registerHandler = async (req, res, next) => {
    try {
        const {
            username,
            email,
            password,
            confirmPassword,
            role
        } = req.body;

        let userExists = await Users.findOne({
            username
        });
        if (userExists) {
            throw {
                statusCode: 400,
                errors: [{
                    field: "username",
                    msg: "User with this username exist!"
                }]
            }
        }

        if(password !== confirmPassword){
            throw {
                statusCode: 400,
                errors: [{
                    field: "password",
                    msg: "password and confirm password must be same"
                }]
            }
        }

        userExists = await Users.findOne({
            email
        });
        if (userExists) {
            throw {
                statusCode: 400,
                errors: [{
                    field: "email",
                    msg: "User with this email exist!"
                }]
            }
        }

        const user = new Users({
            username,
            email,
            password,
            role
        });
        user.save();

        res.status(200).send({
            message: "User created!"
        });
    } catch (err) {
        next(err);
    }

}

module.exports = {
    expressValidatorRegister,
    registerHandler
}