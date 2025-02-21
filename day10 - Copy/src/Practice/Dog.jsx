
import React, { useState, useEffect } from "react";
import './Dog.css'
const RandomDog = () => {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error("Error fetching dog image:", error));
  };

  useEffect(() => {
    fetchDog(); 
  }, []);

  return (
    <div className="dog-container">
      <h2>Random Dog Image</h2>
      
      {dogImage && <img src={dogImage} alt="Random Dog" />}
      <br /><br />
      <button onClick={fetchDog}>Get New Dog</button>
    </div>
  );
};

export default RandomDog;
