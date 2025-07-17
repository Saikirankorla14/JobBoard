import React from "react";

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Min Salary"
        value={filters.salary}
        onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default FilterPanel;
