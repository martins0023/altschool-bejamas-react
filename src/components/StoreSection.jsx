// src/components/StoreSection.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { cartImage1, cartImage2, filter } from '../assets';

// Example product data
const products = [
  { id: 2, title: 'Red Bench', category: 'People', price: 3.89, imageUrl: {cartImage1}, isBestSeller: true },
  { id: 3, title: 'Egg Balloon', category: 'Food', price: 93.89, imageUrl: {cartImage2} },
  // ... more products
];

const StoreSection = ({ onAddToCart }) => {
  return (
    <div className="store-section flex flex-col md:flex-row gap-7 mt-5 items-start">
      <aside className="sidebar-desktop hidden md:block w-64 bg-white p-5 rounded-md shadow-custom-md h-fit">
        {/* Filter groups will have state here */}
      </aside>

      <section className="content-area flex-1 bg-white rounded-md shadow-custom-md overflow-hidden">
        <div className="content-header flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="section-title font-bold text-lg">Photographyb <span className="text-dimmed-gray font-light ml-2">/ Premium Photos</span></h2>
          <div className="sort-controls flex gap-3 items-center text-secondary-text">
            <button className="menu-toggle md:hidden">
              <img src={filter} className="filter-image w-3 h-3" alt="Filter" />
            </button>
            <span className="sort-label">Sort By</span>
            <select className="sort-select border-none font-archivo text-sm cursor-pointer font-semibold appearance-none pr-4 bg-[url('data:image/svg+xml,%3Csvg')] bg-no-repeat bg-right bg-[length:12px]">
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>

        <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        <div className="pagination flex justify-center gap-3 py-4 md:py-8">
          {/* Pagination buttons will be dynamic here */}
        </div>
      </section>
    </div>
  );
};

export default StoreSection;