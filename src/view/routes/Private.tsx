// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import AuthPage from '../pages/AuthPage';

// Tools
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <HomePage /> }
                path = { book.ROOT }
            />
            <Route
                element = { <AccountPage /> }
                path = { book.ACCOUNT_PAGE }
            />
            <Route
                element = { <AuthPage /> }
                path = { book.AUTHENTICATION_PAGE }
            />
            {/* MarkerGen route */}
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
    );
};