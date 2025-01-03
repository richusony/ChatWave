process.env.UV_THREADPOOL_SIZE = os.cpus().length
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import os from "os"

import userRouter from "./routes/user.router.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import { app, server } from "./socket/socket.js";

import { connectMongo } from "./connection.js";

// const app = express();
const PORT = process.env.PORT || 8080;
const whitelist = [ 
    'http://localhost:5173', // not https
    'https://richu-chatwave.vercel.app', // must be https!
    'http://192.168.1.3:5173', // optional, LAN access
    // ...
]

const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {

        // `!origin` allows server-to-server requests (ie, localhost requests)
        if(!origin || whitelist.indexOf(origin) !== -1) {
            console.log("origin :::: ", origin);
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS: "+ origin))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

// MongoDB Connection
connectMongo(`${process.env.MONGODB_URI}`)


// User Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRouter);

console.log("CPU Length :: ",os.cpus().length)

server.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
