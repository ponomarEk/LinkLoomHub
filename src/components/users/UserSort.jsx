import React from 'react';

const UserSort = ({ sortOrder, onSortChange }) => {
  const handleSortChange = e => {
    onSortChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Sort Order:</label>
      <select value={sortOrder} onChange={handleSortChange} className="p-2 border rounded">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default UserSort;
