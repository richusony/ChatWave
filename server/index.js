require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user");
const { connectMongo } = require("./connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
connectMongo(`${process.env.MONGODB_URI}`).then(() => {
  console.log("Database Connected !!");
});

// User Routes
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
