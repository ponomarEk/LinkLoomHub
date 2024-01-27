import { useState } from 'react';
import { useLocation } from 'react-router-dom';

/* Custom React Hook for managing sort functionality. */

const useSort = () => {
  const { search } = useLocation();

  const sortValue = new URLSearchParams(search).get('sortOrder') || 'asc';
  const [sortOrder, setSortOrder] = useState(sortValue);

  return { sortOrder, setSortOrder };
};

export default useSort;
