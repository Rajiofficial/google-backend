const mongoose= require("mongoose");
const models=new mongoose.Schema({
    mail_id:{
          type:String,
          unique:true,
          // trim:true,
          // required:'email address is required',
          // validate:'please fill up valid email address',
          
    }
})
module.exports=mongoose.model("scehmamodel",models)
