import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
