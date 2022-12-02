

const JWT = require('jsonwebtoken');

const authenticationFunc = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token===null){
        console.log('tokem is null');
        res.json({err:'User UnAuthentication'});
    }
    JWT.verify(token, process.env.GENERATE_JSONWEBTOKEN_KEY, (err, user)=>{
        if(err) res.json({error:err})
        req.user = user;
        console.log(user);
        console.log('come to next everything is true');
        next();
    })
}


module.exports = {
    authenticationFunc
}