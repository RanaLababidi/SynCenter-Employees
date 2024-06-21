import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'First product', image: 'https://via.placeholder.com/150', description: 'This is First product.' },
  { id: 2, name: 'Second product', image: 'https://via.placeholder.com/150', description: 'This is Second product.' },
  { id: 3, name: 'Third product', image: 'https://via.placeholder.com/150', description: 'This is Third product.' }
];

function ProductCard({ product, onProductClick }) {
  return (
    <div onClick={() => onProductClick(product)}>
      <h3 className="text-blue-600">{product.name}</h3>
      <img src={product.image} />
    </div>
  );
}

function App() {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleProductClick = (product) => {
    setExpandedProduct(product);
  };

  return (
    <div >
      <div >
        {products.length > 0
          ? products.map(product =>
            <div key={product.id} >
              <ProductCard product={product} onProductClick={handleProductClick} />
            </div>
          )
          : <div >
              <h2>No products found.</h2>
            </div>
        }
      </div>
      <div >
        {expandedProduct == null
          ? <div >
              <h2>No expanded product</h2>
            </div>
          : <div >
              <h2>{expandedProduct.name}</h2>
              <img src={expandedProduct.image}  />

              <p>{expandedProduct.description}</p>
            </div>
        }
      </div>
      
    </div>
  );
}

export default App;
