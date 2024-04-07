import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  notification: {
    notificationType: {
      type: String,
      required: true,
      enum: ["follow-request", "accept-request"],
    },
  },

  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
},{timestamps:true});


const notificationModel = mongoose.model("notifications",notificationSchema);
export default notificationModel;