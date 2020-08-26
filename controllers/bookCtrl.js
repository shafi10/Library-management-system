const Book = require('../models/Book')

exports.postBook =async (req,res) =>{

    try {
        let {name, category, inStock} = req.body
        let book = new Book({
            name,category, inStock
        })

        await book.save()
        res.json(book);
    } catch (error) {
        console.log(error);
    }
}

exports.getBook =async (req , res) =>{
    try {
        const book = await Book.find()
        res.json(book)
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleBook =async (req,res)=>{
    try {
        let book = await Book.findById(req.params.id)
        res.status(201).json(book);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteBook = async (req,res) =>{
    try {
        let book = await Book.findById(req.params.id)
        if(!book){
            return res.status(404).json({msg:'Book not found'})
        }

        await book.remove();
        res.json({msg: 'Book deleted successful'})
    } catch (error) {
        if(error.kind==='ObjectId'){
            return res.status(404).json({msg:'not found'})
        }
        console.log(error)
    }
}

exports.updateBook = async (req,res) =>{
    try {
        let upBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        if(!upBook){
            return res.status(404).json({msg:"product not found"})
        }
        res.json(upBook)
    } catch (error) {
        console.log(error);
    }
}