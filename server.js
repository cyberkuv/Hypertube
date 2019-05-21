const express = require('express');
const server = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connecting to mongodb database
const url = "mongodb://cyberkuv:Pa$$w0rd21101998@ds058548.mlab.com:58548/hypertube";
mongoose.connect(url,
    { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("Connected to Hypertubes Database..."))
    .catch(err => console.log("Something is not quite right", err));

// Setting up Routes
const index = require('./Routes/index');
const musicVids = require('./Routes/musicVids');
const movies = require('./Routes/movies');
const signup = require('./Routes/signup');
const signin = require('./Routes/signin');
const profile = require('./Routes/profile');
const logout = require('./Routes/logout');

// Using the set up routes
server.use('/', index);
server.use('/api', musicVids);
server.use('/api', movies);
server.use('/api', signup);
server.use('/api', signin);
server.use('/api', profile);
server.use('/api', logout);

server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.set('view engine', 'ejs');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`listening on port ${port}....`));