import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const user = useContext(UserContext);
  const { totalItems } = useContext(CartContext);

  return (
    <nav>
      <h2>My E-Commerce</h2>

      <p>Welcome, {user.name}</p>

      <p>Cart Items: {totalItems}</p>
    </nav>
  );
}

export default Navbar;