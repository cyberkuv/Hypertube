const express = require('express');
const routers = express.Router();

routers.get('/', (req, res) => {
    res.render('./Pages/index');
});

module.exports = routers