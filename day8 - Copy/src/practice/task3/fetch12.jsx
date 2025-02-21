import React, { useState, useEffect } from 'react';
 
const FetchDataComponent = () => {
  // Step 1: Create a state variable to store the fetched data
  const [data, setData] = useState(null);
 
  // Step 2: Fetch data when the component first loads
  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/comments/5')
      .then(response => response.json())  // Convert the response to JSON format
      .then(data => setData(data));       // Save the data to state
  }, []);  // Empty array means this effect runs only once after the first render
 
  return (
    <div>
      <h1>Fetched Data</h1>
      
      {/* Step 3: Display data or loading message */}

      {data ? (
        <div>{JSON.stringify(data)}</div>  // Display the data as a simple text
      ) : (
        <p>Loading...</p>  // Show loading message until data is fetched
      )}
    </div>
  );
};
 
export default FetchDataComponent;
 