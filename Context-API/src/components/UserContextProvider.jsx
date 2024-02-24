import React, { useState } from "react";
import UserContext from "../context/UserContext";

const UserContextProvider = ({children})=> {

    const [user, setUser] = useState('')

    return(
        <UserContext.Provider value={{username:'aman', setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider