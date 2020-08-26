const { Schema, model} = require('mongoose');

const studentSchema = new Schema({
    sId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
       type:Date,
       default:Date.now 
    }
})

const Student = model('Student', studentSchema);

module.exports = Student;