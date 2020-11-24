const {
    body
} = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = require("../../models/users");

const expressValidatorLogin = [
    body('username').trim().isLength({
        min: 4,
        max: 20
    }).withMessage("username must be >= 4 characters"),
    body('password').trim().isLength({
        min: 4,
        max: 20
    }).withMessage("password must be >= 4 characters"),
]


const loginHandler = async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    try {
        const user = await Users.findOne({
            username
        });

        if (!bcrypt.compareSync(password, await user.password)) {
            throw {
                statusCode: 400,
                errors: [{
                    msg: "Invalid credentials"
                }]
            }
        }


        res.send(req.body);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    expressValidatorLogin,
    loginHandler
}