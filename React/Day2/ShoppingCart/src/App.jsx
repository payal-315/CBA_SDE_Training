import React from "react";

import UserProvider from "./context/UserContext";
import CartProvider from "./context/CartContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function App() {

  return (

    <UserProvider>

      <CartProvider>

        <Navbar />

        <ProductList />

        <Cart />

        <Profile />

      </CartProvider>

    </UserProvider>

  );
}

export default App;