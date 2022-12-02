
const express = require('express');
const router = express.Router();
const UserClass = require('../controllers/user');
const {authenticationFunc} = require('../middlewares/authentication');

//User Authentication, Protect Route
router.get('/',authenticationFunc ,(req, res)=>{
    res.send('user authenticate');
});
router.post('/login',UserClass.userLogin);
router.post('/register',UserClass.userRegister);

module.exports = router;