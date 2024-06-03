// Core
import React, { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Routes
import PrivateRoute from './PrivateRoute';
import PrivateAdminRoute from './PrivateAdminRoute';

// pages
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ProductsPage from '../pages/ProductsPage';
import SubscriptionPlans from '../pages/SubscriptionPlans';


// Tools
import * as book from './book';

export const MainRoutes: FC = () => {

    return (
      <Suspense fallback={ <div>Loading...</div> }>
        <Routes>
          <Route
              element = { <h1>Cancel</h1> }
              path =  { book.CANCEL_PAGE }
          /> 
          <Route
              element = { <h1>Success page</h1> }
              path =  { book.SUCCESS_PAGE }
          /> 
          <Route
                element = { <ProductsPage /> }
                path = { book.PRODUCTS_PAGE }
            />
          <Route element={<PrivateRoute />}>
            <Route
                element = { <SubscriptionPlans /> }
                path =  { book.SUBSCRIPTION_PAGE }
            /> 
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
