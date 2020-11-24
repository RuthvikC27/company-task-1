const router = require("express").Router();

// ROUTERS
const authRouter = require("./Auth");

// ROUTES
router.get("/", (req, res) => {
    res.send("API");
})
router.use("/api/auth", authRouter);



module.exports = router;