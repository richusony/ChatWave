import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chats from "./components/Chats.jsx";
import LoginSignUp from "./components/LoginSignUp.jsx";
import ChatSec from "./components/ChatSec.jsx";
// import UserContextProvider from "./context/UserContextProvider.jsx";
// import { ThemeProvdier } from "./context/theme.js";

const chatRoute = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignUp />,
  },
  {
    path: "/chats",
    element: <Chats />,
    children: [
      {
        path: ":userId", // Use ":userId" for dynamic user IDs
        element: <Chats />,
      },
    ],
  },
  {
    path: "/mobile/chats/:userId",
    element: <ChatSec />,
  },
  {
    path: "/login",
    element: <LoginSignUp />,
  },
  {
    path: "/signup",
    element: <LoginSignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={chatRoute} />
  </React.StrictMode>
);
