import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';

const Products = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    return fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => res.products)
  }

  useEffect(() => {
    (async ()=>{
      try{
        const products = await getProducts();
        setData(products);
        setLoading(false);
      }catch(error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p className="loading"> Loading...</p>
  }

  return (
    <div className="products">
      <h2>Product List</h2>
      <div className="product-list">
        {data.length > 0 && data.map(product => {
          return (
            <div className='list-card card' key={product.id}>
              <img src={product.images[0]} alt={product.title} className="card-img"/>
              <h2>{product.title}</h2>
              <div className='card-content'>{product.description}</div>
              <Link to={`/products/${product.id}`} className="view-more" >View More 
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Products;