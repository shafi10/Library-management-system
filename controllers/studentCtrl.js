const Student = require('../models/Student')
const {validationResult} = require('express-validator/check')

exports.postNewStudent =  async (req,res) =>{
     const {sId , name, email} = req.body
     try {
         const student = new Student({
             sId,name,email
         })

         await student.save()
         res.json(student)

     } catch (error) {
         console.log(error)
     }
}

exports.getStudent = async (req,res) =>{
    try {
        const student =  await Student.find()
        res.json(student)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteStudent = async (req,res) =>{
    try {
        let student = await Student.findById(req.params.id)
        if(!student){
            return res.status(404).json({msg:'Student not found'})
        }

        await student.remove();
        res.json({msg:'Student deleted'})
    } catch (error) {
        if(error.kind==='ObjectId'){
            return res.status(404).json({msg:'not found'})
        }
        console.log(error)
    }
}