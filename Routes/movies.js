const express = require('express');
const routers = express.Router();

routers.get('/movies', (req, res) => {
    res.render('./Pages/movies');
});

module.exports = routers