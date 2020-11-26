const router = require("express").Router();

// ROUTERS
const authRouter = require("./Auth");
const userRouter = require("./users");

// ROUTES
router.get("/", (req, res) => {
    res.send("API");
})
router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);


module.exports = router;