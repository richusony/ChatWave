import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  acceptFriendRequest,
  followUserRequest,
  getNotifications,
  getUserDetails,
  getUserFriendsList,
  getUsers,
  getUsersForSidebar,
} from "../controllers/user/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUserDetails);
router.post("/search-user", protectRoute, getUsers);
router.get("/get/friends-list", protectRoute, getUserFriendsList);
router.get("/follow-request/:id", protectRoute, followUserRequest);
router.get("/get/notification", protectRoute, getNotifications);
router.get("/accept-request/:id", protectRoute, acceptFriendRequest);

export default router;
