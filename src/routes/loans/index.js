const router = require("express").Router();

// MIDDLEWARES
const verifyMiddleware = require("../../middlewares/verify");
// Routes
const createLoanRequest = require("./create-request");

router.post("/create-request", verifyMiddleware, createLoanRequest);

module.exports = router;