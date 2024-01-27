import React from 'react';
import { Link } from 'react-router-dom';

/* This component uses the React Router's Link to navigate back to the previous route, taking into account URL params and ensuring a more dynamic back navigation. */

const BackButton = () => (
  <div className="mb-4">
    <Link to={-1} className="text-blue-500 hover:underline">
      ← Back to Users
    </Link>
  </div>
);

export default BackButton;
