import express from "express";
import { loginSignUp } from "../controllers/user/auth.controller.js";
const router = express.Router();

router.route("/login-signup").post(loginSignUp);

export default router;