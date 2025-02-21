import React, { useState, useEffect } from "react";

import './parent.css'
import Filters from "./Filter";
import Sorting from "./Sorting";
import Productlist2 from "./Productlist";

function App2() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
   
    fetch("/Product.json ")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
  
    let filtered = products.filter((product) => {
      const withinCategory = category === "All" || product.category === category;
      const withinPrice =
        product.Price >= priceRange[0] && product.Price <= priceRange[1];
      return withinCategory && withinPrice;
    });

    if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price") {
      filtered.sort((a, b) => a.Price - b.Price);
    }

    setFilteredProducts(filtered);
  }, [products, category, priceRange, sortOption]);

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <div className="controls">
       <Filters category={category} setCategory={setCategory} setPriceRange={setPriceRange}/>
       <Sorting sortOption={sortOption} setSortOption={setSortOption}/>
      
      </div>
      
      <Productlist2 products={filteredProducts}/>
    </div>
  );
}

export default App2;
