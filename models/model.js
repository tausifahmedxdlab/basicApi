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

const InverterDataSchema = new schema({
    IMEI:{
        type:String,
        required:true
    },
    SIM:{
        type:String,
        required:true
    },
    DATE_TIME:{
        type:String,
        required:true
    },
    BATTERY_VOLTAGE:{
        type:String,
        required:true
    },
    BATTERY_CURRENT:{
        type:String,
        required:true
    },
    PANEL_VOLTAGE:{
        type:String,
        required:true
    },
    PANEL_CURRENT:{
        type:String,
        required:true
    },
    PANEL_POWER:{
        type:String,
        required:true
    },
    AC_INPUT_VOLTAGE:{
        type:String,
        required:true
    },
    AC_INPUT_FREQUENCY:{
        type:String,
        required:true
    },
    AC_OUTPUT_VOLTAGE:{
        type:String,
        required:true
    },
    AC_OUTPUT_FREQUENCY:{
        type:String,
        required:true
    },
    LOAD_PERCENTAGE:{
        type:String,
        required:true
    },
    TOTAL_ENERGY:{
        type:String,
        required:true
    },
    CUMULATIVE_ENERGY:{
        type:String,
        required:true
    },
    FAULT:{
        type:String,
        required:true
    },
    LATITUDE:{
        type:String,
        required:true
    },
    LONGITITUDE:{
        type:String,
        required:true
    },
    SERVER_DATE:{
        type:Date,
        default:Date.now
    }

})

const DeviceDataSchema = new schema({
    IMEI:{
        type:String,
        required:true
    },
    MODULE_FW:{
        type:String,
        required:true
    },
    SOFTWARE_VER:{
        type:String,
        required:true
    },
    OPERATOR:{
        type:String,
        required:true
    },
    DATE_TIME:{
        type:String,
        required:true
    }
})
const CreaterUser = mongoose.model('user_data',Userschema)
const CreaterinverterData = mongoose.model('inverter_data',InverterDataSchema)
const CreateDeviceData = mongoose.model('device_data',DeviceDataSchema)
module.exports = { CreaterUser, CreaterinverterData,CreateDeviceData};