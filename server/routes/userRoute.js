const express = require('express')
const router = express.Router()
const {verifyToken, verifyUser} = require('../utils/verifyToken')


router.post('/register', register);
router.post('/login', login);

module.exports = router