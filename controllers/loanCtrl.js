const Loan = require('../models/Loan')
const Book = require('../models/Book')

exports.postLoan =async (req,res) =>{

    try {
        let {book, sId, student, deadline} = req.body
          let books = await Book.findOne({name:book})
          let inStock = books.inStock - 1
          await Book.findOneAndUpdate(
            {name:book},
            {$set:{inStock}},{new:true}
        )
        let loan = new Loan({
            book,sId,student,deadline
        })

        await loan.save()
        res.json(loan);
    } catch (error) {
        console.log(error);
    }
}

exports.getLoan =async (req , res) =>{
    try {
        const loan = await Loan.find()
        res.json(loan)
    } catch (error) {
        console.log(error);
    }
}


exports.getSingleLoan =async (req,res)=>{
    try {
        let loan = await Loan.findById(req.params.id)
        res.status(201).json(loan);
    } catch (error) {
        console.log(error);
    }
}

exports.updateLoan = async (req,res) =>{
    try {
        let upLoan = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        if(!upLoan){
            return res.status(404).json({msg:"product not found"})
        }
        res.json(upLoan)
    } catch (error) {
        console.log(error);
    }
}


exports.deleteLoan = async (req,res) =>{
   
    let { book } = req.body
    try {
        let books = await Book.findOne({name:book})
        let inStock = books.inStock + 1
        await Book.findOneAndUpdate(
          {name:book},
          {$set:{inStock}},{new:true}
      )

        const loan = await Loan.findById(req.params.id)
        if(!loan){
            return res.status(404).json({msg:'loan not found'})
        }
        await loan.remove()

        res.json({msg: 'Loan deleted'})
    } catch (error) {
        
    }
}