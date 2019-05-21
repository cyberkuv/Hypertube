const express = require('express');
const routers = express.Router();

routers.get('/signin', (req, res) => {
    res.render('./Pages/signin');
});

module.exports = routers