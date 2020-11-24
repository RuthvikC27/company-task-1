const router = require("express").Router();

// Router
const loginRouter = require("./login");

router.get("/login", loginRouter)

module.exports = router;