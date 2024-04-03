import express from "express";
import { loginSignUp } from "../controllers/user/loginController.js";
const router = express.Router();

router.route("/login-signup").post(loginSignUp);

export default router;
