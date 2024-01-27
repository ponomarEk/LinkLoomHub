import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useDebounce from './useDebounce';

/* Custom React Hook for managing search functionality. */

const useSearch = () => {
  const { search } = useLocation();

  const searchValue = new URLSearchParams(search).get('searchValue') || '';
  const [searchInput, setSearchInput] = useState(searchValue);
  const debouncedSearchValue = useDebounce(searchInput, 500);

  return { searchInput, setSearchInput, debouncedSearchValue };
};

export default useSearch;
