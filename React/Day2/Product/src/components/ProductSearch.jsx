import React, { useMemo, useState } from "react";

function ProductSearch() {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop Dell",
      category: "Laptop",
      price: 60000
    },
    {
      id: 2,
      name: "Laptop HP",
      category: "Laptop",
      price: 55000
    },
    {
      id: 3,
      name: "Gaming Laptop",
      category: "Gaming",
      price: 80000
    },
    {
      id: 4,
      name: "iPhone 15",
      category: "Mobile",
      price: 70000
    },
    {
      id: 5,
      name: "Samsung Galaxy",
      category: "Mobile",
      price: 50000
    },
    {
      id: 6,
      name: "Gaming Mouse",
      category: "Gaming",
      price: 3000
    }
  ];

  const filteredProducts = useMemo(() => {

    console.log("Filtering and sorting products...");

    let result = products.filter(product => {

      const searchValue = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.price.toString().includes(searchValue)
      );

    });

    // Sorting
    if (sortBy === "low") {

      result.sort((a, b) => a.price - b.price);

    } else if (sortBy === "high") {

      result.sort((a, b) => b.price - a.price);

    } else if (sortBy === "name") {

      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    }

    return result;

  }, [search, sortBy]);

  return (
    <div>

      <h2>Product Search</h2>

      <label>
        Search Product:
      </label>

      <input
        type="text"
        placeholder="laptop"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <label>
        Sort By:
      </label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Select</option>
        <option value="low">
          Price Low → High
        </option>
        <option value="high">
          Price High → Low
        </option>
        <option value="name">
          Name
        </option>
      </select>

      <h3>Products:</h3>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (

        filteredProducts.map(product => (

          <div key={product.id}>

            <h4>{product.name}</h4>

            <p>
              Category: {product.category}
            </p>

            <p>
              Price: ₹{product.price}
            </p>

            <hr />

          </div>

        ))

      )}

    </div>
  );
}

export default ProductSearch;