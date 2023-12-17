
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
exports.signup = (req,res)=>{
    const {userName,email,password} = req.body;
    const newUser = new userModel({
        userName,
        email,
        password: bcrypt.hashSync(password, 10),
    });

    userModel.findOne({email}).then(data=>{
        if(data){
            return res.status(400).json({
                status:false,
                message:"user already exists"
            })
        }
        else{
            newUser.save().then(data=> res.status(200).json({
                status:true,
                message:"user created successful"
            }))
        }
    })
}

exports.loginUser = (req, res)=>{
    const {email, password} = req.body;
    userModel.findOne({email}).then(data=>{
        if(!data){
            return res.status(404).json({
                status:false,
                message: 'email not exists'
            })
        }else{
            const passwordVerify  = bcrypt.compareSync(password, data.password);
            if(!passwordVerify){
                return res.status(401).json({
                    status:false,
                    message: "password does'nt match"
                })
            }
            else{
                return res.status(200).json({
                    status:true,
                    message:"login successfull"
                })
            }
        }
    })
}