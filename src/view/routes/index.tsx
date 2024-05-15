// Core
import React, { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Routes
import PrivateRoute from './PrivateRoute';

// pages
import AuthPage from '../pages/AuthPage';
import AccountPage from '../pages/AccountPage';


// Tools
import * as book from './book';

export const MainRoutes: FC = () => {

    return (
      <Suspense fallback={ <div>Spinner</div> }>
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
          <Route
              element = {
                  <Navigate
                      replace
                      to = { book.ACCOUNT_PAGE }
                  />
              }
              path = '*'
          /> 
        </Routes>
      </Suspense>
    );
  
}
