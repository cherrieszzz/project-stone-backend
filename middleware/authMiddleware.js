const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, "net ninja secret")
    }else{
        res.redirect("/login");
    }
}