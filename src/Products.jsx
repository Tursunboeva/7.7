
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addProduct(product))}
            className="bg-blue-500 text-white p-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
