const express = require('express');
const connectDatabase = require('./config/db');
const bodyParser = require('body-parser')
const path = require('path');

const app = express()
connectDatabase()

app.use(express.json({ extended:false}))
app.use(bodyParser.urlencoded({ extended: false }))

const userRoute = require('./routes/user');
const studentRoute = require('./routes/student');
const bookRoute = require('./routes/book')
const loanRoute = require('./routes/loan')

app.use('/user',userRoute);
app.use('/student', studentRoute);
app.use('/book',bookRoute)
app.use('/loan', loanRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
    }

const PORT = process.env.PORT || 5000
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
})