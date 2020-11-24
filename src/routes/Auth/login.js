const {
    body
} = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = require("../../models/users");
const {
    token
} = require("morgan");

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

        const tokenObj = {
            username: await user.username,
            role: await user.role
        }

        const token = jwt.sign(tokenObj, "secret", {
            // algorithm: 'RS256'
        })
        res.header("authorize", token);
        res.send("Logged In");

    } catch (err) {
        console.log(err.message)
        next(err);
    }
}

module.exports = {
    expressValidatorLogin,
    loginHandler
}