const router = require("express").Router();

// Router
const { expressValidatorLogin, loginHandler } = require("./login");
const validateRequestMiddleware = require("../../middlewares/validate-request");

router.post("/login", expressValidatorLogin, validateRequestMiddleware, loginHandler);

module.exports = router;