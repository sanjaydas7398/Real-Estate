import express from "express"
import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config();

const PORT = 4000
// console.log("Mongo URI:", process.env.MONGO);

mongoose.connect(process.env.MONGO).then(()=>{console.log("db connection succesfully")}).catch((error)=>{console.log(error)})

const app = express();

app.listen(PORT,()=>{
   console.log(`the Server is running on the port 3000`)
})