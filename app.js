// import basic modules
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');

// security middleware import
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const hpp = require('hpp');

// database import
const mongoose = require('mongoose');
app.use(express.static('client/build'));

// security middlewares implement
// app.use(rateLimit());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.use(hpp());

// body parser implement
app.use(bodyParser.json());

// // request rate limit
// const limiter = rateLimit({
//     windowMs : 60 * 1000,
//     max : 3000
// });
// app.use(limiter);

// mongodb database connection
let URL = 'mongodb+srv://<username>:<password>@cluster0.knhes.mongodb.net/CRUD?retryWrites=true&w=majority';
let OPTION = { user : 'crud', pass : 'crud9900', autoIndex : true };
mongoose.connect(URL, OPTION, (err) => {

    if(err){
        console.log(err);
    }else{
        console.log('Connected!');
    }

});

// routing implement
app.use('/api/products', router);

// add react front end routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.js'));
})




module.exports = app;
