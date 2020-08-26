const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')
const auth = require('../middleware/auth')

const { postLogin , postRegistration, singleUser} = require('../controllers/userCtrl');


router.post('/login',[
    check('email', ' please enter a email').isEmail(),
    check('password', 'password is required').exists()
], postLogin)

router.post('/register' , postRegistration)
router.get('/authUser',auth, singleUser)


module.exports = router;