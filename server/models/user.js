
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    basket:{
        type:Array,
        default:[]
    },
    favorites:{
        type:Array,
        default:[]
    },
    boughts:{
        type:Array,
        default:[]
    }
})

const User = mongoose.model('users',userSchema);

module.exports=User