import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.router.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"

import { connectMongo } from "./connection.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

// MongoDB Connection
connectMongo(`${process.env.MONGODB_URI}`).then(() => {
  console.log("Database Connected !!");
});


// User Routes

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
