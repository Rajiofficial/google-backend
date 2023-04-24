const express=require("express")
const model=require("./scehmamodel")
const router=express.Router()

router.post("/register",async(req,res)=>{
    console.log(req.body)
    const user=await model.create(req.body)
    res.status(200).json(user)

})
module.exports.router=router