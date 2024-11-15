import express from "express"
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();

const PORT = 4000

mongoose.connect(process.env.MONGO).then(()=>{console.log("db connection succesfully")}).catch((error)=>{console.log(error)})

const app = express();
app.use(express.json());

app.listen(PORT,()=>{
   console.log(`the Server is running on the port 4000`)
})


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter)


