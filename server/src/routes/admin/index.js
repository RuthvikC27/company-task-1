const router = require("express").Router();
const ApproveLoans  = require("./approve-loans");
const verifyMiddleware = require("../../middlewares/verify");
const onlyAdminMiddleware = require("../../middlewares/authorization/onlyAdmin");

router.get("/approve-loans", verifyMiddleware, onlyAdminMiddleware, ApproveLoans);

module.exports = router;