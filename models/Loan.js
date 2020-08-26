const { Schema, model} = require('mongoose');

const loanSchema = new Schema({
    book:{
        type:String,
        required:true
    },
    sId:{
        type:String,
        required:true
    },
    student:{
        type:String,
        required:true
    },
    deadline:{
       type:Date
    },
    date:{
       type:Date,
       default:Date.now 
    }

})

const Loan = model('Loan', loanSchema);

module.exports = Loan;