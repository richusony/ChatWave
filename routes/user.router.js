import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  acceptFriendRequest,
  blockUser,
  followUserRequest,
  getGroups,
  getNotifications,
  getUserDetails,
  getUserFriendsList,
  getUserFriendsListGroup,
  getUsers,
  getUsersForSidebar,
  unBlockUser,
} from "../controllers/user/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUserDetails);
router.get("/block/:id", protectRoute, blockUser);
router.get("/unblock/:id", protectRoute, unBlockUser);
router.post("/search-user", protectRoute, getUsers);
router.get("/get/friends-list", protectRoute, getUserFriendsList);
router.get("/get/friends-list-group", protectRoute, getUserFriendsListGroup);
router.get("/follow-request/:id", protectRoute, followUserRequest);
router.get("/get/notification", protectRoute, getNotifications);
router.get("/accept-request/:id", protectRoute, acceptFriendRequest);
router.get("/get/groups", protectRoute, getGroups)

export default router;
