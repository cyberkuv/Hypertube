const express = require('express');
const routers = express.Router();

routers.get('/logout', async(req, res) => {
    req,session.destroy();
    return res.redirect('/');
});

module.exports = routers