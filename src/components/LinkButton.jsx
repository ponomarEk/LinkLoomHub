import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, name, color }) => (
  <Link
    to={path}
    className={`bg-${color}-500 hover:bg-${color}-700 text-white py-1 px-2 rounded flex items-center`}>
    {name}
  </Link>
);

export default LinkButton;
