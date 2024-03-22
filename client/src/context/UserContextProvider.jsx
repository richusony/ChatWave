import React, { useState } from "react";
import UserContext from "./UserContexs";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("Richu Sony");
    
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;