const express       = require('express');
const morgan        = require('morgan');
const cors          = require('cors');

const url_builder       = require('./routers').builder;
const app           = express();

const corsOptions = {
    allowedHeaders : ['x-access-token','x-refresh-token','x-otp-token','x-signup-token'],
    exposedHeaders : ['x-access-token','x-refresh-token','x-otp-token','X-signup-token']
  }



// middleware

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));


// router
url_builder(app);



module.exports = app;






