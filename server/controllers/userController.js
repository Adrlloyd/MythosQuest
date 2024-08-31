const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password, salt)
  const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:hash,
  })
  await newUser.save()
  res.status(200).send('New user succesfully created')
}

const login = async (req, res) => {
  const user = await User.findOne({username:req.body.username})
    if(!user) return ('User not found')

  const passwordCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!passwordCorrect) return ('Password or Username Incorrect')

  const token = jwt.sign({id: user._id}, process.env.JWT, { expiresIn: '1h' });
  res.status(200).json({ token })

  res.cookie('access_token', token, {httpOnly: true,}).status(200).send(user)
}

module.exports = {register, login}