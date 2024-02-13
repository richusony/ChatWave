import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import darshan from "../assets/users/darshan.jpg";
import delbin from "../assets/users/delbin.jpg";
import jaggu from "../assets/users/jaggu.jpg";

const UsersList = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] py-2 w-full md:w-1/3">

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
          <input className="px-2 py-1 outline-none w-full" placeholder="Search" type="text" />
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
        </div>
      </div>

      <div className="h-screen">

        <div className="my-1 border-gray-500 bg-[#FBFBFB] px-2 py-2 flex justify-between items-center">

          <div className="flex items-center justify-center">

            <div className="mr-2 w-14">

              <img
                className="w-full h-full rounded-full object-cover"
                src={jaggu}
                alt="user"
              />

            </div>

            <div>
              <h3 className="font-semibold">Jagannath Anoob</h3>
              <span className="text-gray-500">Hello how are you</span>
            </div>

          </div>

          <div>
            <span className="text-gray-500 text-sm">9:30PM</span>
          </div>

        </div>
        <div className="my-1 border-gray-500 bg-[#FBFBFB] px-2 py-2 flex justify-between items-center">

          <div className="flex items-center justify-center">

            <div className="mr-2 w-14">

              <img
                className="w-full h-full rounded-full object-cover"
                src={delbin}
                alt="user"
              />

            </div>

            <div>
              <h3 className="font-semibold">Delbin George</h3>
              <span className="text-gray-500">voo</span>
            </div>

          </div>

          <div>
            <span className="text-gray-500 text-sm">11:33PM</span>
          </div>

        </div>
        <div className="my-1 border-gray-500 bg-[#FBFBFB] px-2 py-2 flex justify-between items-center">

          <div className="flex items-center justify-center">

            <div className="mr-2 w-14">

              <img
                className="w-full h-full rounded-full object-cover"
                src={darshan}
                alt="user"
              />

            </div>

            <div>
              <h3 className="font-semibold">Darshan Dinesh MP</h3>
              <span className="text-gray-500">where are you?</span>
            </div>

          </div>

          <div>
            <span className="text-gray-500 text-sm">7:25AM</span>
          </div>

        </div>
        

      </div>
    </div>
  );
};

export default UsersList;
