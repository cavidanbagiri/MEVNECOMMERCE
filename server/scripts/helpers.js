
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');

//Hash Password
const hashPassword = async (password) => {
    const hashing_password = await CryptoJS.SHA256(password,process.env.ENCRYTP_KEY).toString();
    return hashing_password;
}

//Generate JSONWEBTOKEN Token
const generateWebToken = async(user_data) => {
    return JWT.sign({id:user_data._id, email:user_data.email}, process.env.GENERATE_JSONWEBTOKEN_KEY, {expiresIn:'1h'});
}

//Refresh JSONWEBTOKEN Token
const refreshWebToken = async(user_data) => {
    JWT.sign({user:user_data}, process.env.REFRESH_JSONWEBTOKEN_KEY);
}

module.exports = {
    hashPassword,
    generateWebToken,
    refreshWebToken
}