import React from 'react';

const AlbumCard = ({ title }) => {
  return (
    <div className="w-64 h-40 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg overflow-hidden shadow-md p-4">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-3 rounded-full">
          <p className="text-lg font-semibold text-center">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
