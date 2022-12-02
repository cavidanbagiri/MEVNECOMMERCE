const UserService = require("../services/user");
const {hashPassword, generateWebToken, refreshWebToken} = require('../scripts/helpers');

class UserController {
  //User Register Function
  static async userRegister(req, res) {
    const user_data = req.body;
    user_data.password = await hashPassword(user_data.password);
    try {
      await UserService.userRegister(user_data)
      .then((user)=>{
        res.json({user:user});
      }).catch((err)=>{
        res.json({user:`cant register ${err}`});
      })
    } catch (err) {
        console.log('User Login Error In Controller : ',err);
    }
  }
  //User Login Function                                   
  static async userLogin(req, res) {
    const user_data = req.body;
    user_data.password = await hashPassword(user_data.password);
    try {
      UserService.userLogin(user_data).then(async(user)=>{
        let token = await generateWebToken(user);
        //Deleting User Password
        delete user.password;
        res.json({token:token, user:user});
      }).catch((err)=>{
        res.json({user:`cant login ${err}`});
      })
    } catch (err) {
        console.log('User Login Error In Controller : ',err);
    }
  }
}

module.exports = UserController;