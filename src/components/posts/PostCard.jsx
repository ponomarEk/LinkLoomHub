import React from 'react';

const PostCard = ({ title, body }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;
