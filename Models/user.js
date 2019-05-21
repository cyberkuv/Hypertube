const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: { type: String, index: true, required: true, minlength: 3, maxlength: 50 },
    surname: { type: String, required: true, minlength: 3, maxlength: 50 },
    gender: { type: String, required: true, minlength: 4, maxlength: 10 },
    username: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, minlength: 5, maxlength: 50, unique: true },
    age: { type: Number, required: true },
    isVerified: { type: Boolean, default: false },
    secretToken: { type: String },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    date: { type: Date, default: Date.now }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        surname: Joi.string().min(3).max(50).required(),
        gender: Joi.string().min(4).max(10).required(),
        username: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(50).required(),
        age: Joi.string().required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;