import React, { useState, useEffect } from 'react';
 
const FetchDataComponent = () => {
 
  const [data, setData] = useState(null);
 
  
  useEffect(() => {
 
    fetch('https://dummyjson.com/comments/5')
      .then(response => response.json())  
      .then(data => setData(data));       
  }, []);  
 
  return (
    <div>
      <h1>Fetched Data</h1>
      
      

      {data ? (
        <div>{JSON.stringify(data)}</div>  
      ) : (
        <p>Loading...</p>  
      )}
    </div>
  );
};
 
export default FetchDataComponent;
 