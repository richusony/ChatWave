import express from "express";
import {
    createGroup,
  getAllMessages,
  getGroupDetails,
  getMessage,
  sendMessage,
  sendMessageToGroup,
} from "../controllers/user/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Individual chat
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/get/messages", protectRoute, getAllMessages);

// Group chat
router.post("/create-group", protectRoute, createGroup);
router.get("/group/:groupId", protectRoute, getGroupDetails);
router.post("/group/send/:groupId", protectRoute, sendMessageToGroup)

export default router;
