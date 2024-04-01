const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  },
  blocked: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model('users', userSchema);

module.exports = { userModel };