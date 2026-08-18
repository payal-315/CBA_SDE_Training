import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {

  const { role } = useContext(AuthContext);

  return (
    <aside>

      <h3>Sidebar</h3>

      <p>Home</p>

      {role === "Admin" && (
        <>
          <p>Employees</p>
          <p>Projects</p>
          <p>Reports</p>
        </>
      )}

      {role === "Manager" && (
        <>
          <p>Employees</p>
          <p>Projects</p>
          <p>Reports</p>
        </>
      )}

      {role === "Employee" && (
        <>
          <p>My Projects</p>
          <p>My Tasks</p>
        </>
      )}

    </aside>
  );
}

export default Sidebar;