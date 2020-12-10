const express = require("express")
const app = express()
const http = require("http")
const routes = require("./route/auth.js")
require("dotenv").config()
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI,() =>{
    console.log("Connected")
})
//.then(() => {
   
.catch(err => {
    console.error("Some problem occured",err)
})



const Port = process.env.port
const server = http.createServer(app)



app.use(routes)
server.listen(process.env.Port, () => {
    console.log("Successful")
})