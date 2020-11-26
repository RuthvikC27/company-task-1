const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const path = require("path");

// DOTENV ERROR
if (dotenv.error) {
    throw dotenv.error;
}

// SERVER
const app = express();

// Serve up static assets (Usually on heroku)
const prod = process.env.NODE_ENV === 'production';
if (prod) {
    app.use(express.static("./client/dist"));
  
    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/dist/index.html'));
    });
  }

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cookieSession({
    signed: false,
    secure: false,
}));

// MainRouter
const router = require("./routes");
app.use(router);

// ERROR HANDLER
const errorHandler = require("./middlewares/error-handler");
app.use(errorHandler);

module.exports = app;