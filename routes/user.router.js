import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  acceptFriendRequest,
  addFriendsToGroup,
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

router.get("/:id", protectRoute, getUserDetails);
router.get("/block/:id", protectRoute, blockUser);
router.get("/", protectRoute, getUsersForSidebar);
router.post("/search-user", protectRoute, getUsers);
router.get("/unblock/:id", protectRoute, unBlockUser);
router.get("/get/notification", protectRoute, getNotifications);
router.get("/get/friends-list", protectRoute, getUserFriendsList);
router.get("/follow-request/:id", protectRoute, followUserRequest);
router.get("/accept-request/:id", protectRoute, acceptFriendRequest);

// Group
router.get("/get/groups", protectRoute, getGroups)
router.post('/add-to-group', protectRoute, addFriendsToGroup)
router.get("/get/friends-list-group", protectRoute, getUserFriendsListGroup);

export default router;
