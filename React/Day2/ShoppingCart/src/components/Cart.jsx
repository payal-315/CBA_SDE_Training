import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeProduct,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (

        cart.map(item => (

          <div key={item.id}>

            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>
              Quantity: {item.quantity}
            </p>

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                removeProduct(item.id)
              }
            >
              Remove
            </button>

            <hr />

          </div>

        ))

      )}

    </div>
  );
}

export default Cart;