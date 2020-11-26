const router = require("express").Router();

// MIDDLEWARES
const verifyMiddleware = require("../../middlewares/verify");
// Routes
const listUsersRoute = require("./list-users");

router.get("/list-users", verifyMiddleware, listUsersRoute);

module.exports = router;