const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const {postNewStudent, getStudent,deleteStudent} = require('../controllers/studentCtrl')
const auth = require('../middleware/auth')

router.post('/',auth,postNewStudent)
router.get('/',auth, getStudent);
router.delete('/delete/:id',auth, deleteStudent)

module.exports = router