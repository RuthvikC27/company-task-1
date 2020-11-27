const router = require("express").Router();
const ApproveLoans  = require("./approve-loans");
const allLoans = require("./all-loans");

// MIDDLEWARES
const verifyMiddleware = require("../../middlewares/verify");
const onlyAdminMiddleware = require("../../middlewares/authorization/onlyAdmin");

router.get("/approve-loans", verifyMiddleware, onlyAdminMiddleware, ApproveLoans);
router.get("/all-loans", verifyMiddleware, onlyAdminMiddleware, allLoans);

module.exports = router;