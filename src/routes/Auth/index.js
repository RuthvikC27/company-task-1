const router = require("express").Router();

// Router
const loginRouter = require("./login");

router.post("/login", loginRouter)

module.exports = router;