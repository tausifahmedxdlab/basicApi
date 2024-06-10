const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Userschema = new schema({
    IMEI:{
        type:String,
        required:true
    },
    SIM:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const CreaterUser = mongoose.model('device',Userschema)
module.exports = CreaterUser;