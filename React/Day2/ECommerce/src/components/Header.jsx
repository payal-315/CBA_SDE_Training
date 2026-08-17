import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Header() {

  const user = useContext(AuthContext);

  const {
    theme,
    toggleTheme
  } = useContext(ThemeContext);

  return (
    <header>

      <h2>E-Commerce Dashboard</h2>

      <p>
        Welcome, {user.username}
      </p>

      <p>
        Role: {user.role}
      </p>

      <p>
        Theme: {theme}
      </p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <hr />

    </header>
  );
}

export default Header;