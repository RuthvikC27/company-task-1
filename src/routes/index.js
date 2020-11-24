const router = require("express").Router();
const { Users } = require("../db");

// ROUTERS
const authRouter = require("./Auth");

// ROUTES
router.get("/", (req, res) => {
    res.send(Users.list());
})
router.use("/api/auth", authRouter);



module.exports = router;