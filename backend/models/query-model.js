const mongoose = require('mongoose');

const querySchema=mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,

    },
    phone:{
        type:String,

    },
    enquiry:{
        type:String,
        
    }
    ,
    description:{
        type:String,
    }
})

module.exports=mongoose.model('Query',querySchema);