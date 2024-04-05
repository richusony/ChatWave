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


const Chats = () => {
  const { userId } = useParams();
  const [selectedId, setSelectedId] = useState();
  const [openWindow,setOpenWindow] = useState(false);
  const {user} = useLoggedInUser();
  console.log("context : ",user)
  console.log("selectedId : ",selectedId)
  return (
<SocketContextProvider>
    <SelectedChat.Provider value={{ openWindow, setOpenWindow, selectedId, setSelectedId }}>
      {!user && <Navigate to="/" />}
      <div className="w-full h-full flex overflow-hidden">
        {openWindow && <FindUserPage />}
        <UsersList />
        <div className="hidden md:block w-full md:w-2/3 h-full bg-[#E8E8F9]">
          {selectedId ? <ChatSec /> : <InitialPage />}
        </div>
      </div>
    </SelectedChat.Provider>
</SocketContextProvider>

  );
};

export default Chats;
