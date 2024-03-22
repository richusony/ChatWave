import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sampleData, userData } from "./constants";

const UsersList = () => {
  return (
    <div className="w-full md:w-1/3 h-screen bg-[#FFFFFF]  py-2 px-2 overflow-hidden">
      <div className="mb-2 px-2 py-2">
        <div className="px-2 flex justify-between">
          <h2 className="text-xl">
            <FontAwesomeIcon icon={faBars} />
          </h2>

          <div>
            <h2 className="text-xl">
              <FontAwesomeIcon className="text-gray-600" icon={faUserPlus} />
            </h2>
          </div>
        </div>
      </div>

      <div className="my-1">
        <div className="mx-2 px-2 py-1 border border-gray-500 rounded-full text-xl flex justify-evenly md:justify-between items-center cursor-text">
          <input
            className="px-2 py-1 outline-none w-full"
            placeholder="Search"
            type="text"
          />
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
        </div>
      </div>

      <div className="h-5/6 overflow-auto">
        {sampleData &&
          sampleData.receviedChats.map((user, index) => (
            <Link key={user.userId} to={`/chats/${user.userId}`}>
              <div className="my-1 border-gray-500 bg-[#FBFBFB] px-2 py-2 flex justify-between items-center rounded">
                <div className="flex items-center justify-center">
                  <div className="mr-2 w-14">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={user.avatar}
                      alt="user"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold">{user.username}</h3>
                    <span className="text-gray-500">
                      {user.messages[user.messages.length - 1].message}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 text-sm">
                    {user.messages[user.messages.length - 1].time}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default UsersList;
