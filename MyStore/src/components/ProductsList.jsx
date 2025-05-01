import React, { useState, useEffect } from "react";
import "../css/ProductsList.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => openProductDetail(product)}
        >
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-title">{product.title}</div>
        </div>
      ))}

      {selectedProduct && (
        <div className="overlay" onClick={closeProductDetail}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="overlay-image"
            />
            <p>
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <button onClick={closeProductDetail} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
