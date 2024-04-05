import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserDetails, getUsers, getUsersForSidebar } from "../controllers/user/user.controller.js";

const router = express.Router();

router.get('/', protectRoute,getUsersForSidebar)
router.get('/:id',protectRoute, getUserDetails)
router.post('/search-user',protectRoute,getUsers)

export default router;