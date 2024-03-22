import React from "react";
import UsersList from "./UsersList";
import ChatSec from "./ChatSec";
import InitialPage from "./InitialPage";
import { useParams } from "react-router-dom";

const Chats = () => {
  const { userId } = useParams();
  return (
    <div className="w-full h-full flex overflow-hidden">
        <UsersList />
      <div className="hidden md:block w-full md:w-2/3 h-full bg-[#E8E8F9]">
        {userId ? <ChatSec /> : <InitialPage />}
      </div>
    </div>
  );
};

export default Chats;
