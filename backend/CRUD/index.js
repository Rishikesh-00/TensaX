const express=require('express');

require('dotenv').config();
const {connectMongoDb}=require("./connection")
const {logReqRes}=require("./middlewares")
const PORT=process.env.PORT || 3000
const app=express();
const userRouter=require("./routes/user");

app.use(express.urlencoded({extended:false}))
// app.use(express.json());
// connection with db
connectMongoDb("mongodb://localhost:27017/tensaXapp1").then(()=>console.log("monogodb connected!"))
app.use(logReqRes("log.txt"))




// routes
app.use("/api/users",userRouter)

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})







