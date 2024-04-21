import mongoose from "mongoose";
import { GROUP_PROFILE_IMG } from "../utils/constants.js";

const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    groupImg: { type: String, default: GROUP_PROFILE_IMG },
    groupAdmins: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "group-messages",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const groupModel = mongoose.model("groups", groupSchema);

export default groupModel;
