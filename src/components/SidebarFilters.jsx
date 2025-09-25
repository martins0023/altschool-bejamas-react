import React from "react";

export default function SidebarFilters() {
  return (
    <aside className="sidebar-desktop">
      <div className="filter-group">
        <h3>Category</h3>
        <label className="filter-option">
          <input type="checkbox" id="people" name="category" value="people" />{" "}
          People
        </label>
        <label className="filter-option">
          <input type="checkbox" id="premium" name="category" value="premium" />{" "}
          Premium
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            id="pets"
            name="category"
            value="pets"
            defaultChecked
          />{" "}
          Pets
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            id="food"
            name="category"
            value="food"
            defaultChecked
          />{" "}
          Food
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            id="landmarks"
            name="category"
            value="landmarks"
            defaultChecked
          />{" "}
          Landmarks
        </label>
        <label className="filter-option">
          <input type="checkbox" id="cities" name="category" value="cities" />{" "}
          Cities
        </label>
        <label className="filter-option">
          <input type="checkbox" id="nature" name="category" value="nature" />{" "}
          Nature
        </label>
      </div>

      <div className="filter-group">
        <h3>Price range</h3>
        <label className="filter-option">
          <input type="checkbox" id="price1" name="price" value="0-20" /> Lower
          than $20
        </label>
        <label className="filter-option">
          <input type="checkbox" id="price2" name="price" value="20-100" /> $20
          - $100
        </label>
        <label className="filter-option">
          <input type="checkbox" id="price3" name="price" value="100-200" />{" "}
          $100 - $200
        </label>
        <label className="filter-option">
          <input type="checkbox" id="price4" name="price" value="200+" /> More
          than $200
        </label>
      </div>
    </aside>
  );
}
