const jwt = require('jsonwebtoken');


async function authmiddleware(req,res,next) {
    
    const token = req.header("Authorization")?.split(" ")[1];


    if (!token) {
        return res.status(401).json({message:"Access Denied !"});
    }

    try {
        
        const verifiedToken = await jwt.verify(token,process.env.JWT_SECRET);
        req.user = verifiedToken;
        // console.log(req.user);
        next();
        
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
}

module.exports = authmiddleware;