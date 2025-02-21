import React, { useState, useEffect } from "react";

function FetchData3() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); 

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Brand: {data.brand}</p>
        </div>
      )}
    </div>
  );
}

export default FetchData3;
