// import React, { useEffect } from 'react';

 import { useEffect } from "react"

function First() {
  useEffect(() => {
    console.log("Component mounted");
  }, ); 

  return<h1>Hello, World!</h1>;
   
  
}

export default First





