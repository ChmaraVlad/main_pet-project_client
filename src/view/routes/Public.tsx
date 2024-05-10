// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';
import AuthPage from '../pages/AuthPage';

// Tools
import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = {  <Pages.Root />  }
                path = { book.ROOT }
            />
            <Route
                element = {  <AuthPage />  }
                path = { book.AUTHENTICATION_PAGE }
            />
            {/* MarkerGen route */}
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
    );
};