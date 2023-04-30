const express=require("express")
const { router }=require('./router')
const {connect}=require('./dbconnection')
require("dotenv").config()
const cors=require('cors')

const app=express();
app.use(cors())
app.use(express.json())
app.use("/",router)

connect()

let port = 3001 

app.listen(port,()=>{
    console.log(`app is running on ${port} 🚀 `)
})