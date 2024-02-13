import React from "react";
import UsersList from "./UsersList";
import ChatSec from "./ChatSec";
import InitialPage from "./InitialPage";
const Chats = () => {
  return (
    <div className="w-full min-h-full flex ">
      <UsersList />
      <div className="hidden md:block w-full md:w-2/3 min-h-screen bg-[#E8E8F9]">
        {/* <InitialPage /> */}
        <ChatSec />
      </div>
    </div>
  );
};

export default Chats;
