import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"
import userRouter from "./routes/user.js"
import { connectMongo } from "./connection.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
connectMongo(`${process.env.MONGODB_URI}`).then(() => {
  console.log("Database Connected !!");
});

// User Routes
app.use("/", userRouter);

// app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
