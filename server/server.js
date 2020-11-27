const mongoose = require("mongoose");
const app = require("./src/express-conf");


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    mongoose.connect(`mongodb://mongo:27017/loan-app`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log(err.message)
    })

    console.log(`App started on http://localhost:${PORT}`);
})