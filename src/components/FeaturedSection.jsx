// src/components/FeaturedSection.jsx
import React from 'react';
import { cartImage1, cartImage2, cartImage3, hero } from '../assets';

const FeaturedSection = ({ onAddToCart }) => {
  return (
    <section className="featured-section mt-5 bg-white rounded shadow-custom-sm overflow-visible">
      <div className="featured-heading flex items-center justify-between gap-3 px-0 py-4 md:px-5">
        <h2 className="font-bold text-lg md:text-xl text-[#111] m-0">Samurai King Resting</h2>
        <button className="add-to-cart-btn-heading hidden md:block bg-[#111] text-white border-none py-2 px-4 rounded font-bold cursor-pointer whitespace-nowrap" onClick={() => onAddToCart({ id: 1, name: 'Samurai King Resting', price: '?' })}>
          ADD TO CART
        </button>
      </div>

      <div className="featured-image-wrapper relative w-full overflow-hidden block">
        <img src={hero} alt="Samurai King Resting Shiba Inu" className="featured-image w-full h-[420px] md:h-[380px] object-cover block" />
        <div className="photo-badge absolute bottom-0 left-0 bg-white py-2 px-4 font-semibold text-xs rounded-tr-md shadow-custom-md">
          Photo of the day
        </div>
      </div>

      <div className="featured-description-wrapper flex flex-col md:flex-row gap-7 p-5 items-start bg-white border-t border-gray-100">
        <button className="add-to-cart-below-hero block md:hidden w-full bg-[#111] text-white border-none py-3 px-4 rounded font-bold cursor-pointer mb-2" onClick={() => onAddToCart({ id: 1, name: 'Samurai King Resting', price: '?' })}>
          ADD TO CART
        </button>
        <div className="about-column flex-2 min-w-0 order-2 md:order-1">
          <h3 className="about-heading text-lg font-bold mb-3">About the Samurai King Resting</h3>
          <div className="featured-category text-secondary-text mb-3 text-sm">Pets</div>
          <p className="featured-description text-secondary-text text-sm leading-relaxed">
            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. So how did the classical Latin become so incoherent?
          </p>
        </div>
        <aside className="people-column flex-1 min-w-[200px] order-1 md:order-2">
          <div className="people-also-buy">
            <h4 className="text-base mb-3 font-bold">People also buy</h4>
            <div className="recommended-grid recommended-grid--large grid grid-cols-3 gap-3 mb-3">
              <img src={cartImage1} alt="" className="recommended-item w-full h-[72px] object-cover rounded" />
              <img src={cartImage2} alt="" className="recommended-item w-full h-[72px] object-cover rounded" />
              <img src={cartImage3} alt="" className="recommended-item w-full h-[72px] object-cover rounded" />
            </div>
            <div className="details-section mt-3 text-sm text-secondary-text">
              <div className="details-title font-bold mb-1.5">Details</div>
              <div className="details-line">Size: 1020 x 1020 pixels</div>
              <div className="details-line">Size: 15 mb</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FeaturedSection;