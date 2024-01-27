import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, name, color }) => {
  // Need to do this as appearantly Tailwind does not support dynamic styles
  const style =
    color === 'blue'
      ? 'bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded flex items-center'
      : 'bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded flex items-center';

  return (
    <Link to={path} className={style}>
      {name}
    </Link>
  );
};

export default LinkButton;
