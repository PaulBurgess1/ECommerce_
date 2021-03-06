import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) =>{
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin

    }, config.JWT_SECRET,{
        expiresIn: '48h'
    })
}
const isAuth = (req,res, next) =>{
    const token =req.headers.authorization;
    if(token){
        const onlyToken =token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) =>{
            if(err){
                return res.status(401).send({msg: "Invalid Token."});
            }
            req.user =decode;
            
            return next();
        });
    }
    else{
        return res.status(401).send({msg: "Token is not supplied."});
    }
}

const isAdmin =(req,res,user,next)=>{
    if(user && user.isAdmin){
        return next();
    }
    return res.status(403).send({msg: "Admin Token is invalid"});
}

export {
    getToken, isAuth, isAdmin
} 