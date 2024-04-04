import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserDetails, getUsersForSidebar } from "../controllers/user/user.controller.js";

const router = express.Router();

router.get('/', protectRoute,getUsersForSidebar)
router.get('/:id',protectRoute, getUserDetails)

export default router;