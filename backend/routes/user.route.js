const express = require("express");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken")

const { userModel } = require("../model/user.model");


const userRouter = express.Router();


userRouter.get("/",async(req,res)=>{
    const payload = req.body
    try {
        const users = await userModel.find(payload)
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

userRouter.post("/register",async(req,res)=>{
    const {name,date,email,password} = req.body;
     try {
        //  if (password.length < 5) {
        //     return res.status(400).send({ "msg": "Password should be at least 5 characters long" });
        // }

        // if (password !== confirmPassword) {
        //     return res.status(400).send({ "msg": "Password and ConfirmPassword do not match" });
        // }
        bcrypt.hash(password,6,async(err,secure_pass)=>{
            if(err){
                console.log(err)
            }else{
                const user = new userModel({name,date,email,password:secure_pass})
                await user.save();
                res.send({msg:"User Registered"})
            }
        })
     } catch (error) {
        console.log({msg:"Something went wrong","error":error.message})
     }
})



userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.find({email});
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token = jwt.sign({userID:user[0]._id},"masai");
                    res.send({msg:"Login Successfully done!","token":token})
                }else{
                    res.send({msg:"Wrong Credintials about token"})
                }
            })
        }else{
             res.send({msg:"Wrong Credintials"})
        }
    } catch (error) {
        console.log({msg:"something went wrong","error":error.message})
    }
})




module.exports={
    userRouter
}