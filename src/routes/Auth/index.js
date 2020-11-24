const router = require("express").Router();

// Router
const { expressValidatorLogin, loginHandler } = require("./login");
const { expressValidatorRegister, registerHandler } = require("./register");
const validateRequestMiddleware = require("../../middlewares/validate-request");

router.post("/login", expressValidatorLogin, validateRequestMiddleware, loginHandler);
router.post("/register", expressValidatorRegister, validateRequestMiddleware, registerHandler);

module.exports = router;