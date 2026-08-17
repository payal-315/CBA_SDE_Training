import React, {
  useContext,
  useMemo
} from "react";

import { CartContext } from "../context/CartContext";

function Statistics() {

  const { cart } = useContext(CartContext);


  const statistics = useMemo(() => {

    console.log("Calculating statistics...");

    // Total Cart Value
    const totalCartValue = cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );


    // Total Products
    const totalProducts = cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


    // Average Product Price
    const averageProductPrice =
      cart.length > 0
        ? cart.reduce(
            (total, item) =>
              total + item.price,
            0
          ) / cart.length
        : 0;


    // Most expensive product
    const mostExpensiveProduct =
      cart.length > 0
        ? cart.reduce((max, item) =>
            item.price > max.price
              ? item
              : max
          )
        : null;


    return {
      totalCartValue,
      totalProducts,
      averageProductPrice,
      mostExpensiveProduct
    };

  }, [cart]);


  return (
    <div>

      <h2>Statistics</h2>

      <p>
        Total Cart Value:
        ₹{statistics.totalCartValue}
      </p>

      <p>
        Total Products:
        {statistics.totalProducts}
      </p>

      <p>
        Average Product Price:
        ₹{statistics.averageProductPrice}
      </p>

      <p>
        Most Expensive Product:
        {statistics.mostExpensiveProduct?.name}
      </p>

    </div>
  );
}

export default Statistics;