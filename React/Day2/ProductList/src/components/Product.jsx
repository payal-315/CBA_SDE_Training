import React from "react";

function Product({ product, onAdd }) {

  console.log("Product rendered:", product.name);

  return (
    <div>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button onClick={() => onAdd(product)}>
        Add
      </button>

      <hr />

    </div>
  );
}

export default React.memo(Product);