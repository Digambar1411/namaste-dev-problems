import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    return await fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
  }

  useEffect(() => {
    (async () => {
      const data = await getProduct();
      setProduct(data);
    })();
  }, [id]);

  if (!product ) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className='card product-details-card'>
      <img src={product?.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <div className='details-card-content'>{product.description}</div>
      <div><strong>Price:</strong> ${product.price}</div>
      <Link to='/products' className="view-more" >Back To Products
      </Link>
    </div>
  )
}

export default ProductDetails