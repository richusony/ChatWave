import React from "react";
import delbin from "../assets/users/delbin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faEllipsisV,
  faListDots,
  faPaperPlane,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { sampleData, userData } from "./constants.js";

const ChatSec = () => {
  const { userId } = useParams();
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Header  */}
        <div className="py-2 px-4 bg-white sticky right-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="w-11">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={`https://randomuser.me/api/portraits/men/${
                    userId ? userId : 1
                  }.jpg`}
                  alt="user"
                />
              </div>
              <div className="ml-2">
                <span className="font-semibold">
                  {sampleData.receviedChats[userId - 1].username}
                </span>
              </div>
            </div>

            <div className="w-28 flex justify-between items-center text-lg text-gray-700">
              <span className="cursor-pointer hover:text-black">
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <span className="cursor-pointer hover:text-black">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="cursor-pointer hover:text-black">
                <FontAwesomeIcon icon={faEllipsisV} />
              </span>
            </div>
          </div>
        </div>

        {/* Chats  */}
        <div className="px-3 h-[81vh] overflow-auto">
          <div className="my-4 text-center">
            <span className="px-2 py-2 bg-white rounded-xl shadow-xl text-gray-700">
              January 10 2023
            </span>
          </div>

          {sampleData.receviedChats[userId - 1].messages.map((msg) =>
            msg.userId == userId ? (
              <div className="my-2 w-full flex justify-end">
                <div className="py-1 px-2 w-fit bg-[#7351F2] rounded-xl shadow-md">
                  <p className="text-white">{msg.message}</p>
                  <div className="text-end text-sm">
                    <p className="text-slate-200">{msg.time}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={msg.msgId} className="my-2 w-full flex justify-start">
                <div className="py-1 px-2 w-fit bg-[#7351F2] rounded-xl shadow-md">
                  <p className="text-white">{msg.message}</p>
                  <div className="text-end text-sm">
                    <p className="text-slate-200">{msg.time}</p>
                  </div>
                </div>
              </div>
            )
          )}
          {/* 
          {userData[0].chats[0].msgToUser.map((msg, index) => (
           
          ))} */}
        </div>

      <div className="px-2 py-2 w-full flex items-center justify-between cursor-text">
        <input
          className="outline-none bg-white w-screen py-3 px-3 rounded-full"
          type="text"
          placeholder="type something..."
        />
        <span className="ml-2 py-3 px-4 text-white bg-[#7351F2] cursor-pointer rounded-full">
          <FontAwesomeIcon icon={faPaperPlane} />
        </span>
      </div>
      </div>

    </>
  );
};

export default ChatSec;
