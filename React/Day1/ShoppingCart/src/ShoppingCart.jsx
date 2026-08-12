import { useState, useEffect } from "react";

function ShoppingCart() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);

  const [finalPrice, setFinalPrice] = useState(0);

  const [shipping, setShipping] = useState(50);

  useEffect(() => {
    const fakeProducts = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mouse", price: 500 },
      { id: 3, name: "Keyboard", price: 1500 },
      { id: 4, name: "Headphones", price: 2000 },
      { id: 5, name: "Monitor", price: 12000 },
    ];

    setProducts(fakeProducts);

    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    let sum = 0;

    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });

    setTotal(sum);

    let dis = 0;

    if (coupon === "SAVE10") {
      dis = sum * 0.1;
    }

    setDiscount(dis);

    if (sum > 1000) {
      setShipping(0);
    } else {
      setShipping(50);
    }

    setFinalPrice(sum - dis + (sum > 0 ? shipping : 0));

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, coupon, shipping]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div
      style={{
        width: "900px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h1>E-Commerce Shopping Cart</h1>

      <h2>Products</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price (₹)</th>
            <th>Add</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h2>Shopping Cart</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.length > 0 ? (
            cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>

                <td>₹{item.price}</td>

                <td>
                  <button onClick={() => decrease(item.id)}>
                    -
                  </button>

                  {" "}

                  {item.quantity}

                  {" "}

                  <button onClick={() => increase(item.id)}>
                    +
                  </button>
                </td>

                <td>₹{item.price * item.quantity}</td>

                <td>
                  <button onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Cart is Empty</td>
            </tr>
          )}
        </tbody>
      </table>

      <br />

      <input
        type="text"
        placeholder="Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />

      <p>Use Coupon: <b>SAVE10</b></p>

      <h3>Total Price : ₹{total}</h3>

      <h3>Discount : ₹{discount}</h3>

      <h3>Shipping : ₹{shipping}</h3>

      <h2>Final Price : ₹{finalPrice}</h2>

      {shipping === 0 && total > 0 && (
        <h3 style={{ color: "green" }}>
           Free Shipping Applied!
        </h3>
      )}

      <button onClick={emptyCart}>
        Empty Cart
      </button>
    </div>
  );
}

export default ShoppingCart;