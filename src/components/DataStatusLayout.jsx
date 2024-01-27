import React from 'react';

import { ErrorMessage, LoaderIndicator, NoDataMessage } from '.';

const DataStatusLayout = ({ isLoading, error, dataLength, children }) => {
  return (
    <>
      {isLoading && <LoaderIndicator />}
      {error && <ErrorMessage />}
      {!isLoading && !dataLength && !error && <NoDataMessage />}
      {children}
    </>
  );
};

export default DataStatusLayout;
