const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const {JWT_SECRET} = require("../config/env.config")
const userModel = require("../models/user.model")

async function register(req,res){
    const {name,email,password,role} = req.body;

     if (password.length < 8) return res.status(400).json({message: "Password must be at least 8 characters long",});
  

    const isUserExists = await userModel.exists({email});

    if(isUserExists) return res.status(409).json({message:"User already exists"})

    const hash = await bcrypt.hash(password,10);


    const user  = userModel.create({
        email,name,role,password:hash
    })

    const token = jwt.sign({id:user.id},JWT_SECRET,{expiresIn:"7d"});

    res.cookie("token", token);

    res.status(201).json({
        message:"User Registered Sucessfully"
    })


}

async function login(req,res){
    const{email,password} = req.body;

     const user = await userModel.findOne({email});
     
      if(!user) return res.status(401).json({message:"Invalid Credentails"})
    
      const isValidPassowrd = await  bcrypt.compare(password,user.password)
     
      if(!isValidPassowrd) return res.status(401).json({message:"Invalid Credentials"})

    const token = jwt.sign({id:user.id},JWT_SECRET,{expiresIn:"7d"});

    res.cookie("token",token);

    res.status(200).json({message:"Login Sucessfull"});
}


module.exports = {register,login}