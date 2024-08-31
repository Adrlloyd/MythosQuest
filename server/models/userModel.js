require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGO)
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},
{timestamps: true}
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema)

module.exports = User