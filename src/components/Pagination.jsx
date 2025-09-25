import React from "react";

export default function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination-btn disabled">‹</button>
      <button className="pagination-btn">1</button>
      <button className="pagination-btn">2</button>
      <button className="pagination-btn active">3</button>
      <button className="pagination-btn">4</button>
      <button className="pagination-btn">›</button>
    </div>
  );
}
