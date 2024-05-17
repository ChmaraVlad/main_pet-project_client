// Core
import React, { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Routes
import PrivateRoute from './PrivateRoute';
import PrivateAdminRoute from './PrivateAdminRoute';

// pages
import AuthPage from '../pages/AuthPage';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';


// Tools
import * as book from './book';

export const MainRoutes: FC = () => {

    return (
      <Suspense fallback={ <div>Loading...</div> }>
        <Routes>
          <Route
              element = { <AuthPage/> }
              path =  { book.AUTHENTICATION_PAGE }
          /> 
          <Route element={<PrivateRoute />}>
            <Route
                  element = { <AccountPage /> }
                  path = { book.ACCOUNT_PAGE }
              />
          </Route>
          <Route element={<PrivateAdminRoute />}>
            <Route
                  element = { <AdminPage /> }
                  path = { book.ADMIN_PAGE }
              />
          </Route>
          <Route
              element = { <HomePage/> }
              path =  { book.ROOT }
          /> 
          <Route
              element = {
                  <Navigate
                      replace
                      to = { book.ROOT }
                  />
              }
              path = '*'
          /> 
        </Routes>
      </Suspense>
    );
  
}
