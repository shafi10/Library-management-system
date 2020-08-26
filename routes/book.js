const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const {postBook, getBook, deleteBook, updateBook, getSingleBook} = require('../controllers/bookCtrl')

router.post('/', postBook);
router.get('/', getBook);
router.get('/single/:id', getSingleBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router