import express from "express"
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();

const PORT = 5000

mongoose.connect(process.env.MONGO).then(()=>{console.log("db connection succesfully")}).catch((error)=>{console.log(error)})

const app = express();
app.use(express.json());

app.listen(PORT,()=>{
   console.log(`the Server is running on the port 5000`)
})


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err, req, res, next)=>{
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error'
   return res.status(statusCode).json({
       success: false,
       statusCode,
       message
   })
})


