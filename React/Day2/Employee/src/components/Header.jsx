import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {

  const { username, role } = useContext(AuthContext);

  return (
    <header>
      <h2>Employee Management System</h2>

      <h3>
        Welcome {username}
      </h3>

      <p>
        Role: {role}
      </p>

      <hr />
    </header>
  );
}

export default Header;