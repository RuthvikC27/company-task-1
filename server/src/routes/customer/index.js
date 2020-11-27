const router = require("express").Router();
const getCustomerLoans  = require("./get-customer-loans");
const verifyMiddleware = require("../../middlewares/verify");

router.get("/loans", verifyMiddleware, getCustomerLoans);

module.exports = router;