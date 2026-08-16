import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const customer = {
    name: "Rahul",
    customerId: 101,
    accountType: "Savings"
  };

  return (
    <AuthContext.Provider value={customer}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;