import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart,
    updateQuantity
  } = useContext(CartContext);


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  return (
    <div>

      <h2>Cart</h2>

      {cart.map(item => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>
            ₹{item.price}
          </p>

          <p>
            Quantity:
            {" "}
            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity - 1
                )
              }
            >
              -
            </button>

            {" "}
            {item.quantity}
            {" "}

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity + 1
                )
              }
            >
              +
            </button>
          </p>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>

          <hr />

        </div>

      ))}

      <h3>
        Cart Total: ₹{total}
      </h3>

    </div>
  );
}

export default Cart;