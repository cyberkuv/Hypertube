const express = require('express');
const router = express.Router();

router.get('/:id', async(req, res, next) => {
    res.render('./Pages/profile');
});

module.exports = router;