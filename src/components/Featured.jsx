import React from "react";
import { cartImage1, hero, subHero1, subHero2, subHero3 } from "../assets";

export default function Featured({ featuredOpen, setFeaturedOpen }) {
  return (
    <section className="featured-section">
      <div className="featured-heading">
        <h2>Samurai King Resting</h2>
        <button className="add-to-cart-btn-heading">ADD TO CART</button>
      </div>

      <div className="featured-image-wrapper">
        <img
          src={hero}
          alt="Samurai King Resting Shiba Inu"
          className="featured-image"
        />
        <div className="photo-badge">Photo of the day</div>
        <button
          className="image-overlay"
          title="More info"
          onClick={() => setFeaturedOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16.5V12"></path>
            <path d="M12 8.5H12.01"></path>
          </svg>
        </button>

        <aside
          id="featuredSidebar"
          className={`featured-sidebar ${featuredOpen ? "active" : ""}`}
          aria-hidden={!featuredOpen}
        >
          <button className="close-btn" onClick={() => setFeaturedOpen(false)}>
            ×
          </button>
          <div className="featured-title">Samurai King Resting</div>
          <div className="featured-price">$120</div>
          <img
            className="featured-thumbnail"
            src={cartImage1}
            alt="thumb"
          />
          <button
            className="clear-btn"
            onClick={() => {
              setFeaturedOpen(false);
              console.log("Featured selection cleared");
            }}
          >
            Close
          </button>
        </aside>
      </div>

      <div className="featured-description-wrapper">
        <button className="add-to-cart-below-hero">ADD TO CART</button>

        <div className="about-column">
          <h3 className="about-heading">About the Samurai King Resting</h3>
          <div className="featured-category">Pets</div>
          <p className="featured-description">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book. So how did the classical
            Latin become so incoherent?
          </p>
        </div>

        <aside className="people-column">
          <div className="people-also-buy">
            <h4>People also buy</h4>
            <div className="recommended-grid recommended-grid--large">
              <img
                src={subHero1}
                alt=""
                className="recommended-item"
              />
              <img
                src={subHero2}
                alt=""
                className="recommended-item"
              />
              <img
                src={subHero3}
                alt=""
                className="recommended-item"
              />
            </div>

            <div className="details-section desktop-details">
              <div className="details-title">Details</div>
              <div className="details-line">Size: 1020 x 1020 pixels</div>
              <div className="details-line">Size: 15 mb</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
