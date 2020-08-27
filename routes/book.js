const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const {postBook, getBook, deleteBook, updateBook, getSingleBook} = require('../controllers/bookCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, postBook);
router.get('/',auth, getBook);
router.get('/single/:id',auth, getSingleBook)
router.put('/update/:id',auth ,updateBook)
router.delete('/delete/:id',auth, deleteBook)

module.exports = router