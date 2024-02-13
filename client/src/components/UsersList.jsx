import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const UsersList = () => {
  return (
    <div className="min-h-screen py-2 px-2 w-full md:w-1/3">

      <div className="mb-2">

        <div className="px-2">
          <h2 className="text-xl">
            <FontAwesomeIcon icon={faBars} />
          </h2>
        </div>

      </div>

      <div className="my-1">

        <div className="mx-2 px-2 outline rounded-full text-xl flex justify-evenly md:justify-between items-center">
          <input className="px-2 py-2" placeholder="Search" type="text" />
          <FontAwesomeIcon className="" icon={faSearch}/>
        </div>

      </div>

      <div className="bg-blue-300 h-screen">

        <div className="bg-green-300">
          <div>
            <div className="w-20">
              <img className="w-full h-full" src="../assets/users/jaggu.jpg" alt="user" />
            </div>
            Name 
            last Message 
          </div>

          <div>
              <span>Last Message Delivered Time</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UsersList;
