const router = require("express").Router();

// ROUTERS
const authRouter = require("./Auth");
const userRouter = require("./users");
const loanRouter = require("./loans");

// ROUTES
router.get("/", (req, res) => {
    res.send("API");
})
router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api/loan", loanRouter);

module.exports = router;