import { useEffect, useRef, useState } from 'react';

/* Custom React Hook for debouncing a value. */

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue || value; // Use the original value if debouncedValue is empty;
};

export default useDebounce;
