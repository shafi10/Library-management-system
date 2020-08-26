const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const { postLoan, getLoan, getSingleLoan, updateLoan} = require('../controllers/loanCtrl')

router.post('/', postLoan);
router.get('/', getLoan);
router.get('/single/:id', getSingleLoan)
router.put('/update/:id', updateLoan);


module.exports = router