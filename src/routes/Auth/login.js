const {
    body
} = require("express-validator");

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


const loginHandler = (req, res) => {
    const {
        username,
        password
    } = req.body;


    res.send(user);
}

module.exports = {
    expressValidatorLogin,
    loginHandler
}