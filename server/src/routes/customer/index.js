const router = require("express").Router();
const getCustomerLoans  = require("./get-customer-loans");
const verifyMiddleware = require("../../middlewares/verify");
const onlyCustomerMiddleware = require("../../middlewares/authorization/onlyCustomer");

router.get("/loans", verifyMiddleware, onlyCustomerMiddleware, getCustomerLoans);

module.exports = router;