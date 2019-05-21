const express = require('express');
const router = express.Router();

router.get('/signup', async (req, res) => {
    res.render('./Pages/signup');
});

router.post('/signup', (req, res) => {
    const person = new Object();
    person.name = req.body.name;
    person.surname = "Doe";
    person.gender = "Male";
    person.username = "cyberkuv";
    person.email = "cyberkuv@gmail.com";
    person.age = 50;
    person.password = "Pa$$w0rd";
    console.log(person);
});

module.exports = router;