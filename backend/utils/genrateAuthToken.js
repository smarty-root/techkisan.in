const jwt = require("jsonwebtoken");

module.exports.genrateToken=(user)=>{
    try{
        const token = jwt.sign({ id: user._id ,role:"User"}, process.env.JWT_SECERT_KEY, {
            expiresIn: "30d",
        });
        return token;
    }
    catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
}