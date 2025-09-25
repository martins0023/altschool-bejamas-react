import React, { forwardRef } from "react";

const MobileFilterPanel = forwardRef(function MobileFilterPanel(
  { open, onClose, onClear, onSave },
  ref
) {
  return (
    <aside
      ref={ref}
      id="mobileFilterPanel"
      className={`mobile-filter-panel ${open ? "active" : ""}`}
      aria-hidden={!open}
    >
      <div className="mobile-filter-header">
        <div className="mobile-filter-title">Filter</div>
        <button className="close-mobile-btn" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="mobile-filter-body">
        <div className="filter-group-mobile">
          <h4>Category</h4>
          <label className="filter-option">
            <input type="checkbox" /> People
          </label>
          <label className="filter-option">
            <input type="checkbox" /> Premium
          </label>
          <label className="filter-option">
            <input type="checkbox" /> Pets
          </label>
          <label className="filter-option">
            <input type="checkbox" /> Food
          </label>
          <label className="filter-option">
            <input type="checkbox" /> Landmarks
          </label>
        </div>
        <div className="mobile-filter-actions">
          <button className="clear-btn-mobile" onClick={onClear}>
            CLEAR
          </button>
          <button className="save-btn-mobile" onClick={onSave}>
            SAVE
          </button>
        </div>
      </div>
    </aside>
  );
});

export default MobileFilterPanel