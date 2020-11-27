const router = require("express").Router();

// MIDDLEWARES
const verifyMiddleware = require("../../middlewares/verify");
const onlyAdminAndAgentMiddleware = require("../../middlewares/authorization/onAdminAndAgent");

// Routes
const listUsersRoute = require("./list-users");

router.get("/list-users", verifyMiddleware, onlyAdminAndAgentMiddleware, listUsersRoute);

module.exports = router;