import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearch("");
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];
    if (order === "high") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === "low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container">
      <span className="font-semibold text-2xl mr-2">All Paints</span>
      <span>(140 Products)</span>
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search by Name..."
              value={search}
              onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearchClick}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div>
          <span className="font-semibold text-xl">Sort By</span>
          <span
            className="mx-6 cursor-pointer"
            onClick={() => handleSort("high")}
          >
            <i
              className="fa-solid fa-arrow-up-wide-short fa-lg"
              style={{ color: "#63E6BE" }}
            ></i>
          </span>
          <span className="cursor-pointer" onClick={() => handleSort("low")}>
            <i
              className="fa-solid fa-arrow-down-wide-short fa-lg cursor-pointer"
              style={{ color: "#f50000" }}
            ></i>
          </span>
        </div>
      </div>

      <div className="product-list flex flex-wrap justify-center items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <div className="text-center mt-10">
            <p className="text-xl font-semibold">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
