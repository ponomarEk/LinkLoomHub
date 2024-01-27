import React from 'react';

const UserSearch = ({ searchValue, onSearchChange }) => {
  const handleSearchChange = e => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by user name"
        value={searchValue}
        onChange={handleSearchChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default UserSearch;
