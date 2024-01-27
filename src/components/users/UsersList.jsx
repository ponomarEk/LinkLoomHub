import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { DataStatusLayout, RouteHeader } from '..';
import useFetchData from '../../hooks/useFetchData';
import useSearch from '../../hooks/useSearch';
import useSort from '../../hooks/useSort';
import UserService from '../../services/userService';
import UserCard from './UserCard';
import UserSearch from './UserSearch';
import UserSort from './UserSort';

const UsersList = () => {
  const { data: users, error, isLoading } = useFetchData(UserService.getUsers);
  const { setSortOrder, sortOrder } = useSort();
  const { searchInput, setSearchInput, debouncedSearchValue } = useSearch();
  const navigate = useNavigate();

  // Search
  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Sort
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // Update URL params to ensure route sharing is covered
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('searchValue', debouncedSearchValue);
    newSearchParams.set('sortOrder', sortOrder);

    navigate({ search: newSearchParams.toString() });
  }, [debouncedSearchValue, sortOrder, navigate]);

  return (
    <section className="container mx-auto p-8">
      <RouteHeader headerName={'Users list'} />
      <div className="flex items-center mb-4 gap-10">
        <UserSearch onSearchChange={setSearchInput} searchValue={searchInput} />
        <UserSort onSortChange={setSortOrder} sortOrder={sortOrder} />
      </div>
      <DataStatusLayout isLoading={isLoading} error={error} dataLength={sortedUsers?.length}>
        {!!sortedUsers?.length && (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sortedUsers.map(user => (
              <UserCard key={user.id} {...user} />
            ))}
          </ul>
        )}
      </DataStatusLayout>
    </section>
  );
};

export default UsersList;
