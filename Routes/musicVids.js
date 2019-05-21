const express = require('express');
const routers = express.Router();

routers.get('/musicVids', (req, res) => {
    res.render('./Pages/musicVids');
});

module.exports = routers