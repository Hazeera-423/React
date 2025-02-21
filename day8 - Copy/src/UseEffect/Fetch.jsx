import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
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
      {loading ? (<p>Loading...</p>) : (
        <ul>
          {data.slice(0, 10).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
