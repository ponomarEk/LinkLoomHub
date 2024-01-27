import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl">LinkLoom Hub</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
