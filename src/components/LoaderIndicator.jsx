import React from 'react'

const LoaderIndicator = () => (
  <div className="flex items-center justify-center mt-50">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-75 h-12 w-12" />
  </div>
);

export default LoaderIndicator;
