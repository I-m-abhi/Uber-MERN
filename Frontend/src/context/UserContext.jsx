import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({children})=> {

  const [user, setUser] = useState("");

  return (
    <UserDataContext value={{user, setUser}}>
      {children}
    </UserDataContext>
  )
};

export default UserContext;