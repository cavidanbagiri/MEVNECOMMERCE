
const User = require('../models/user');

class UserService{
    //User Register
    static async userRegister(user_data){
        const new_user = await new User(user_data);
        return new_user.save();
    }
    //User Login
    static async userLogin(user_data){
        const current_user = await User.findOne(user_data);
        return current_user;
    }
}


module.exports = UserService