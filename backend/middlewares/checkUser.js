const jwt = require('jsonwebtoken');
module.exports.CheckUser = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);
        req.user = decoded;
        
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(403).send({ message: "Forbidden" });
    }
}