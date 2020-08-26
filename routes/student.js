const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const {postNewStudent, getStudent,deleteStudent} = require('../controllers/studentCtrl')

router.post('/',postNewStudent)
router.get('/', getStudent);
router.delete('/delete/:id', deleteStudent)

module.exports = router