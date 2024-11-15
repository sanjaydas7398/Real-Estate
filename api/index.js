import express from "express"
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

dotenv.config();

const PORT = 4000

mongoose.connect(process.env.MONGO).then(()=>{console.log("db connection succesfully")}).catch((error)=>{console.log(error)})

const app = express();

app.listen(PORT,()=>{
   console.log(`the Server is running on the port 3000`)
})


app.use("/api/user",userRouter)


