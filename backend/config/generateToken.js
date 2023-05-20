const jwt = require('jsonwebtoken');
require("dotenv").config();
JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id) => {
    return jwt.sign({id}, JWT_SECRET, {
        expiresIn: '30d',
    });
}

module.exports = generateToken;