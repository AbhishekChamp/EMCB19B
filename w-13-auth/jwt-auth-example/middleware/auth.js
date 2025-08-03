const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
    const authHeader = req.headers["authorization"] || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) {
        return res.status(401).json({ error: "Missing or malformed token" });
    }

    let payload;
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ error: "Token invalid or expired" });
    }

    const user = await User.findById(payload.id).select("-password");
    if (!user) {
        return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
};
