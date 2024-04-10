import express from "express";
import { getAllMessages, getMessage, sendMessage } from "../controllers/user/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessage);
router.post("/send/:id",protectRoute, sendMessage);
router.get("/get/messages", protectRoute, getAllMessages)

export default router;