import React, { createContext, useCallback, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 70000,
      quantity: 1
    },
    {
      id: 2,
      name: "Headphones",
      price: 5000,
      quantity: 1
    },
    {
      id: 3,
      name: "Mouse",
      price: 2000,
      quantity: 1
    }
  ]);

  // Add product
  const addToCart = useCallback((product) => {

    setCart(prevCart => {

      const existing = prevCart.find(
        item => item.id === product.id
      );

      if (existing) {

        return prevCart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });

  }, []);


  // Remove product
  const removeFromCart = useCallback((id) => {

    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );

  }, []);


  // Update quantity
  const updateQuantity = useCallback((id, quantity) => {

    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: quantity
            }
          : item
      )
    );

  }, [removeFromCart]);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;