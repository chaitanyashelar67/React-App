import React, { useEffect, useState } from 'react'
import "./newArrivals.css"

const NewArrivals = () => {
  const[products, setProduct] =useState([]);

  async function getProducts() {
    try {
      const res = await fetch ("https://dummyjson.com/products")
    const data = await res.json();

    setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect (()=>{ 
    getProduct();
  },[])
  return (
  <>
  <section class="cards-container">
        <div class="card-heading">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div class="card-item flex center wrap">
           
        </div>
        
        <div class="view-all-btn flex center">
            <button class="show-all">View All</button>
        </div>
    </section>
  </>
  )
}

export default NewArrivals
