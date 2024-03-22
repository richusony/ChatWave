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
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { sampleData } from "./constants.js";
import useOnline from "../Hooks/useOnline.js";

const ChatSec = () => {
  const { userId } = useParams();
  const isOnline = useOnline();
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden bg-[#E8E8F9] dark:bg-[#424769]">
        {/* Header  */}
        <div className="py-2 px-4 bg-white dark:bg-[#2D3250] shadow-sm md:shadow-none sticky right-0">
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
                <span className="font-semibold dark:text-gray-300">
                  {sampleData.receviedChats[userId - 1].username}
                </span>
              </div>
            </div>

            <div className="w-28 flex justify-between items-center text-lg text-gray-700">
              <span className="cursor-pointer dark:text-[#6c44fa] dark:hover:text-gray-800 hover:text-[#6c44fa]">
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <span className="cursor-pointer dark:text-[#6c44fa] dark:hover:text-gray-800 hover:text-[#6c44fa]">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="cursor-pointer dark:text-[#6c44fa] dark:hover:text-gray-800 hover:text-[#6c44fa]">
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
              <div key={msg.msgId} className="my-2 w-full flex justify-end">
                <div className="py-1 px-2 max-w-40 md:w-fit bg-[#FFFFFF]  rounded-xl shadow-md">
                  <p className="text-gray-700">{msg.message}</p>
                  <div className="text-end text-sm">
                    <p className="text-slate-500">{msg.time}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={msg.msgId} className="my-2 w-full flex justify-start">
                <div className="py-1 px-2 max-w-40 md:w-fit bg-[#7351F2] rounded-xl shadow-md">
                  <p className="text-white dark:text-gray-800">{msg.message}</p>
                  <div className="text-end text-sm">
                    <p className="text-gray-200 dark:text-gray-700">{msg.time}</p>
                  </div>
                </div>
              </div>
            )
          )}
          {/* 
          {userData[0].chats[0].msgToUser.map((msg, index) => (
           
          ))} */}
        </div>

        {isOnline ? (
          <div className="px-2 sticky py-2 w-full flex items-center justify-between cursor-text">
            <input
              className="outline-none bg-white dark:bg-[#2D3250] dark:text-gray-300 w-screen py-3 px-3 rounded-full"
              type="text"
              placeholder="type something..."
            />
            <span className="ml-2 py-3 px-4 text-white dark:text-gray-800 bg-[#7351F2] cursor-pointer rounded-full">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
          </div>
        ) : (
          <div className="px-2 sticky py-2 w-full flex items-center justify-center cursor-text text-center">
            <h1 className="text-center text-gray-500 cursor-wait text-xl font-semibold">
              You're Offline{" "}
              <FontAwesomeIcon className="hover:text-[#6c44fa]" icon={faWifi} />
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSec;
