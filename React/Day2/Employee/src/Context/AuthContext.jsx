import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const user = {
    username: "Rahul",
    role: "Manager",
    isLoggedIn: true
  };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;