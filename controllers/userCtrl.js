const User = require('../models/User')

const {validationResult} = require('express-validator/check')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')

exports.postLogin = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
     
    const {email, password} = req.body
    try {
       let user= await User.findOne({email})
       if(!user){
          return res.status(400).json({errors: [{ msg: 'Invalid'}]})
       }

    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({errors: [{ msg: 'Invalid'}]})
     }
     
         const payload = {
             user:{
                 id:user.id
             }
         }
     
         jwt.sign(payload, config.get('jwtSecret'),{
             expiresIn:360000
         }, (err, token)=>{
             if(err) throw err;
             res.json({ token })
         })
    } catch (error) {
        console.log(error)
    }
}

exports.postRegistration = async (req,res) =>{
    const {email , password} = req.body

    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(404).json('Invalid Credientials')
        }
        user = new User({
            email,password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password , salt)
         await user.save()
         res.json({msg:"User created Successful"})

    } catch (error) {
        console.log(error);
    }
}

exports.singleUser =async (req,res) =>{
   try {
       const user = await User.findById(req.user.id).select('-password')
       res.json(user)
   } catch (error) {
       console.log(error);
   }
} 