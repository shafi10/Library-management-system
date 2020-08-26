const { Schema, model} = require('mongoose');


const bookSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    inStock:{
        type:Number,
        required:true
    }
})

const Book = model('Book', bookSchema)

module.exports = Book;








