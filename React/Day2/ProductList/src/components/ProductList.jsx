import React, { useCallback, useState } from "react";
import Product from "./Product";

function ProductList() {

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 80000
    },
    {
      id: 2,
      name: "Laptop",
      price: 70000
    },
    {
      id: 3,
      name: "Headphones",
      price: 5000
    }
  ];

  const handleAddToCart = useCallback((product) => {

    setCart(prevCart => [
      ...prevCart,
      product
    ]);

  }, []);

  return (
    <div>

      <h2>Product List</h2>

      <button onClick={() => setCount(count + 1)}>
        Parent Count: {count}
      </button>

      <h3>
        Cart Items: {cart.length}
      </h3>

      {products.map(product => (

        <Product
          key={product.id}
          product={product}
          onAdd={handleAddToCart}
        />

      ))}

    </div>
  );
}

export default ProductList;