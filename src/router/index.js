import React from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';

import { ROUTES } from '../constants';
import { AlbumsPage, ErrorPage, PostsPage, UsersPage } from '../pages';

export const router = createHashRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.USERS} />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.USERS,
    element: <UsersPage />
  },
  {
    path: ROUTES.USER_POSTS,
    element: <PostsPage />
  },
  {
    path: ROUTES.USER_ALBUMS,
    element: <AlbumsPage />
  }
]);
