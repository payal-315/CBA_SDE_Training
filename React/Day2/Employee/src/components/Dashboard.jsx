import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

function Dashboard() {

  const { role, isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <h2>Please Login</h2>;
  }

  if (role === "Admin") {
    return <AdminDashboard />;
  }

  if (role === "Manager") {
    return <ManagerDashboard />;
  }

  if (role === "Employee") {
    return <EmployeeDashboard />;
  }

  return <h2>Invalid Role</h2>;
}

export default Dashboard;