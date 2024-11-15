import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();


console.log("jjjj",process.env.JWTTOKEN)

export const signup =async (req,res,next)=>{
       console.log(req.body) 

      const {username,email,password} = req.body;
      const hashedPassword = bcryptjs.hashSync(password,10);
      const newUser = new User({username,email,password:hashedPassword});
      try{
            await newUser.save();
            res.status(201).json("User Created Succefully")
      }catch(error){
        next(error)
      } 
}


export const signin = async(req,res,next)=>{
        const {email, password} = req.body;


        try{
          const validUser = await User.findOne({email})
           if(!validUser) return next(errorHandler(404,'user not found'));
           const validPassword = bcryptjs.compareSync(password,validUser.password);
           if(!validPassword) return next(errorHandler(401,"Wrong Credintial"));

           const token = jwt.sign({id:validUser.id}, process.env.JWTTOKEN);

           const{password:pass, ...res} = validUser._doc;
           res.cookie('access_token',token,{httpOnly:true}).status(200).json(res);

        }catch(error){
            next(error)
        }
}