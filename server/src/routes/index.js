const router = require("express").Router();

// ROUTERS
const authRouter = require("./Auth");
const userRouter = require("./users");
const loanRouter = require("./loans");
const customerRouter = require("./customer");

// ROUTES
router.get("/", (req, res) => {
    res.send("API");
})
router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api/loan", loanRouter);
router.use("/api/customer", customerRouter);

module.exports = router;