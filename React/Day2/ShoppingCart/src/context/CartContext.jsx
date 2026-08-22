import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      quantity: 2
    },
    {
      id: 2,
      name: "Mouse",
      price: 1000,
      quantity: 1
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000,
      quantity: 2
    }
  ]);

  // Add product
  const addProduct = (product) => {
    setCart((prevCart) => {

      const existingProduct = prevCart.find(
        item => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product
  const removeProduct = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Total number of items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;