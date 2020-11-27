const router = require("express").Router();

// MIDDLEWARES
const verifyMiddleware = require("../../middlewares/verify");
const validationRequestMiddleware = require("../../middlewares/validate-request");
const onlyAgentMiddleware = require("../../middlewares/authorization/onlyAgent");

// Routes
const {
    createLoanRequest,
    expressValidatorLoanObject
} = require("./create-request");

router.post("/create-request", verifyMiddleware, expressValidatorLoanObject, validationRequestMiddleware,createLoanRequest);

module.exports = router;