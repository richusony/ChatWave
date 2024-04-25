import mongoose from "mongoose";

const groupMessagesSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "groups",
      required: true,
    },
    message: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const groupMessagesModel = mongoose.model(
  "group-messages",
  groupMessagesSchema
);

export default groupMessagesModel;
