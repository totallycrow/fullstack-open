import React from "react";

export default function Filter({ filter, onFilterChange }) {
  return (
    <div>
      Filter: <input value={filter} onChange={onFilterChange} />
    </div>
  );
}
