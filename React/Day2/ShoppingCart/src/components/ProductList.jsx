import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductList() {

  const {
    cart,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mouse",
      price: 1000
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000
    },
    {
      id: 4,
      name: "Monitor",
      price: 15000
    }
  ];

  return (
    <div>

      <h2>Products</h2>

      {products.map(product => {

        const cartProduct = cart.find(
          item => item.id === product.id
        );

        return (
          <div key={product.id}>

            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <button onClick={() => addProduct(product)}>
              Add Product
            </button>

            {cartProduct && (
              <>
                <button
                  onClick={() =>
                    decreaseQuantity(product.id)
                  }
                >
                  -
                </button>

                <span>
                  {" "}
                  {cartProduct.quantity}
                  {" "}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(product.id)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeProduct(product.id)
                  }
                >
                  Remove
                </button>
              </>
            )}

            <hr />

          </div>
        );
      })}

    </div>
  );
}

export default ProductList;