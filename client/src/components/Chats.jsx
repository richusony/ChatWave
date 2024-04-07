import React, { useContext, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import UsersList from "./UsersList";
import FindUserPage from "./FindUserPage.jsx"
import ChatSec from "./ChatSec";
import InitialPage from "./InitialPage";
import SelectedChat from "../context/SelectedChat.jsx";
import LoggedInUserContext from "../context/LoggedInUserContexs.js";
import { useLoggedInUser } from "../context/LoggedInUserCnxtProvider.jsx";
import { SocketContextProvider } from "../context/SocketContext.jsx";
import { useMenuContext } from "../context/MenuContext.jsx";
import MenuBar from "./MenuBar.jsx";
import { AuthContextProvider } from "../context/AuthContext.jsx";


const Chats = () => {
  // const { userId } = useParams();
  const [selectedId, setSelectedId] = useState();
  const [openWindow,setOpenWindow] = useState(false);
  const [notificationPage, setNotificationPage] = useState(false)
  const {user} = useLoggedInUser();
  const {menuBar} = useMenuContext();
  console.log("menu ",menuBar)
  console.log("context : ",user)
  console.log("selectedId : ",selectedId)

  return (
<AuthContextProvider>
<SocketContextProvider>
    <SelectedChat.Provider value={{ openWindow, setOpenWindow, notificationPage, setNotificationPage, selectedId, setSelectedId }}>
      {!user && <Navigate to="/" />}
      <div className="transition delay-150 ease-linear w-full h-full flex overflow-hidden">
        {openWindow && <FindUserPage />}
        {menuBar ? <MenuBar /> : <UsersList /> }
        <div className="hidden md:block w-full md:w-2/3 h-full bg-[#E8E8F9]">
          {selectedId ? <ChatSec /> : <InitialPage />}
        </div>
      </div>
    </SelectedChat.Provider>
</SocketContextProvider>
</AuthContextProvider>


  );
};

export default Chats;
