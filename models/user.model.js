import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    friends: [
      {
        friendId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "users",
        },
        status: { type: Boolean, required: true },
        blockByUser: { type: Boolean, required: true },
      },
    ],
    blocked: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;
