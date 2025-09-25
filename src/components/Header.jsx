import React from "react";
import { logo } from "../assets";

export default function Header({ mobileFilterOpen, toggleMobileFilter }) {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo-link" aria-label="Bejamas home">
          <img
            src={logo}
            alt="Bejamas"
            className="logo-size"
          />
        </a>

        <div className="header-actions">
          <button
            className="menu-toggle"
            aria-expanded={mobileFilterOpen}
            aria-label="Open filters"
            onClick={toggleMobileFilter}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"></path>
            </svg>
          </button>

          <button className="cart-btn" aria-label="Open cart">
            <svg
              className="cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 10H3"></path>
              <circle cx="9" cy="20" r="1"></circle>
              <circle cx="20" cy="20" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
