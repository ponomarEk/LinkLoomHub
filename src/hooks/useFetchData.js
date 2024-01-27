import { useCallback, useEffect, useState } from 'react';

/* Custom React Hook for fetching data asynchronously using a callback function. */

const useFetchData = callback => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await callback();
      setData(response);
    } catch (error) {
      setError(error.message || 'An error occurred.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isLoading
  };
};

export default useFetchData;
