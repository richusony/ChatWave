import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String
  },
  blocked: {
    type: Boolean,
    required: true,
  },
});

export const userModel = mongoose.model('users', userSchema);
