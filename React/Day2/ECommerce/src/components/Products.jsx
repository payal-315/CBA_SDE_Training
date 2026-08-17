import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import { CartContext } from "../context/CartContext";

function Products() {

  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  const previousSearchRef = useRef("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 70000
    },
    {
      id: 2,
      name: "iPhone",
      price: 80000
    },
    {
      id: 3,
      name: "Headphones",
      price: 5000
    },
    {
      id: 4,
      name: "Keyboard",
      price: 3000
    },
    {
      id: 5,
      name: "Mouse",
      price: 2000
    }
  ];


  // Search box focus when page loads
  useEffect(() => {

    searchRef.current.focus();

  }, []);


  // Store previous search
  useEffect(() => {

    previousSearchRef.current = search;

  }, [search]);


  const filteredProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div>

      <h2>Products</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <p>
        Previous Search:
        {" "}
        {previousSearchRef.current}
      </p>


      {filteredProducts.map(product => (

        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default Products;