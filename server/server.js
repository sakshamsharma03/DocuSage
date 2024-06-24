import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import User from "./Model/user.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const app=express();


app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sharmasaksham0309:e4swc49jmhtwHZ56@cluster0.r9dwucm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        
    }
).then(()=>console.log("DB Connected")).catch((err)=>(console.log(err)))
 

app.get("/",(req,res)=>{
    res.send("chlra hai bhai");

})
app.post("/create",async (req,res)=>
{
    const {name,email,password}=req.body;
    let user=await User.findOne({email});
    if(user) return res.status(500).send("Already Registered");

    bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(password,salt, async (err,hash)=>
        {
            const newUser= await User.create({
                name,email,password:hash,
            }).then(console.log("successfull")).catch((console.error()));
            
          let token = jwt.sign({email:email},"secret");
          res.cookie("token",token);
          res.send("registered");
        })
    })
})

app.post("login",async (req,res)=>
{
    
})


app.listen(process.env.PORT || 4000);