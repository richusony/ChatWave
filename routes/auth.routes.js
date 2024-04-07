import express from "express";
import { loginSignUp, userLogOut } from "../controllers/user/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/login-signup",loginSignUp);
router.get("/logout",protectRoute, userLogOut);

export default router;