const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user.model");
const JWT_SECRET = process.env.JWT_SECRET;


const protect = asyncHandler(async (req, res, next) => {
    let token;
    if ( req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            
            // decode the token id
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = await UserModel.findById(decoded.id).select("-password");
            
            next();

        } catch (error) {
            res.status(401).send('Not authorized, token failed');
        }
    }
    
    if (!token) {
        res.status(401).send('Not authorized, login again');
    }
});

module.exports = { protect };