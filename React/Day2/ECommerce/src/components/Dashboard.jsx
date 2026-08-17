import React from "react";

import Products from "./Products";
import Cart from "./Cart";
import Statistics from "./Statistics";

function Dashboard() {

  return (
    <div>

      <Products />

      <Cart />

      <Statistics />

    </div>
  );
}

export default Dashboard;