import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSearch,
  faSun,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sampleData } from "./constants";
import useScreen from "../Hooks/useScreen";
import useTheme, { ThemeProvdier } from "../context/theme";

const UsersList = () => {
  const screenWidth = useScreen();
  // const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(sampleData);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState(sampleData.receviedChats);
  const [themeMode, setThemeMode] = useState("light");
  // const {darkTheme,lightTheme,ThemeMode} = useTheme();

  useEffect(() => {
    handleSearchUsers();
  }, [searchUser]);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const handleSearchUsers = () => {
    const searchTerm = searchUser.trim().toLowerCase(); // Trim and convert search input to lowercase
    if (searchTerm !== "") {
      const newData = userData.receviedChats.filter((user) =>
        user.username.toLowerCase().includes(searchTerm)
      );
      setFilteredUser(newData);
    } else {
      setFilteredUser(userData.receviedChats); // Reset to original data when search input is empty
    }
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  const handleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <ThemeProvdier value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full md:w-1/3 h-screen bg-[#FFFFFF] dark:bg-[#424769]  py-2 px-2 overflow-hidden">
        <div className="mb-2 px-2 py-2">
          <div className="px-2 flex justify-between">
            <h2 className="text-xl">
              <FontAwesomeIcon
                icon={faBars}
                className="hover:text-[#6c44fa] dark:text-gray-800 dark:hover:text-[#6c44fa] cursor-pointer"
              />
            </h2>
            <div className="flex justify-between">
              <h2 className="mr-3 text-xl">
                <FontAwesomeIcon
                  onClick={handleTheme}
                  className="transition delay-150 ease-linear text-gray-600 hover:text-[#6c44fa] dark:text-gray-800 dark:hover:text-[#6c44fa] cursor-pointer"
                  icon={themeMode === "dark" ? faSun : faMoon}
                />
              </h2>
              <h2 className="mx-1 text-xl">
                <FontAwesomeIcon
                  className="text-gray-600 hover:text-[#6c44fa] dark:text-gray-800 dark:hover:text-[#6c44fa] cursor-pointer"
                  icon={faUserPlus}
                />
              </h2>
            </div>
          </div>
        </div>

        <div className="my-1">
          <div className="mx-2 px-2 py-1 border-2 border-gray-500 hover:border-[#8463f9] rounded-full text-xl flex justify-evenly md:justify-between items-center cursor-text shadow-sm">
            <input
              className="px-2 py-1 outline-none w-full bg-transparent dark:text-gray-300"
              placeholder="Search"
              type="text"
              onChange={(e) => setSearchUser(e.target.value)}
            />
            <FontAwesomeIcon
              onClick={handleSearchUsers}
              className="transition delay-150 ease-linear text-gray-500 cursor-pointer hover:text-[#6c44fa]"
              icon={faSearch}
            />
          </div>
        </div>

        <div className="h-5/6 overflow-auto">
          {filteredUser.map((user, index) => (
            <Link
              key={user.userId}
              to={
                screenWidth < 767
                  ? `/mobile/chats/${user.userId}`
                  : `/chats/${user.userId}`
              }
            >
              <div className="my-1 border-gray-500 bg-[#FBFBFB] dark:bg-[#7077A1] px-2 py-2 flex justify-between items-center rounded">
                <div className="flex items-center justify-center">
                  <div className="mr-2 w-14">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={user.avatar}
                      alt="user"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold  dark:text-gray-900">
                      {user.username}
                    </h3>
                    <span className="text-gray-800 text-sm">
                      {user.messages[user.messages.length - 1].message.length >
                      30
                        ? user.messages[
                            user.messages.length - 1
                          ].message.substring(0, 25) + "..."
                        : user.messages[user.messages.length - 1].message}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 dark:text-gray-800 text-sm">
                    {user.messages[user.messages.length - 1].time}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ThemeProvdier>
  );
};

export default UsersList;
