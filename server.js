const app = require("./src/express-conf");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
})