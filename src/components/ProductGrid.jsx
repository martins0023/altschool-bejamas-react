import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, handleAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={(e) => handleAddToCart(e)} />
      ))}
    </div>
  );
}
