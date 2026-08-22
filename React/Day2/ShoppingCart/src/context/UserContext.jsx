import React, { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const user = {
    name: "Rahul",
    email: "rahul@gmail.com"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;