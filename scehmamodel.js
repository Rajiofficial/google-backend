const mongoose= require("mongoose");
const models=new mongoose.Schema({
    mail_id:{
          type:String,
          unique:true,
        
    }
})
module.exports=mongoose.model("scehmamodel",models)
