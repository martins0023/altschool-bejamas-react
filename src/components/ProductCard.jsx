import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <div className="image-wrap">
        {product.badge && (
          <div className="best-seller-badge">{product.badge}</div>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="">
          <button className="add-to-cart-btn" onClick={onAdd}>
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="product-info p-4">
        <div className="product-category">{product.category}</div>
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price}</div>
      </div>
    </div>
  );
}
