
const mongoose=require("mongoose")
const Dburl='mongodb+srv://raji:ranjithraj@cluster0.aa9ahmk.mongodb.net/google'
const connectionparams= {
    useNewUrlParser: true,
}
exports.connect=()=>{

mongoose.connect(Dburl,connectionparams)
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
}


