import React,{useState,useEffect} from "react"
 import './Arr.css'
const ArrList=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('/List.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
        .catch(error=>console.error('Error loading products:', error))
    },[])
   return(
         <div className='aa'>
            <h1>Products List</h1>
            <ul>
        {products.map(product => (
          <li key={product.id} className="bb">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
           
          </li>
        ))}
      </ul>
         </div>
   )
}
export default ArrList