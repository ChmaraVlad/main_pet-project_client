// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';
import HomePage from '../pages/HomePage';

// Tools
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Root/> }
                path = { book.ROOT }
            />
            <Route
                element = { <HomePage /> }
                path = { book.ROOT }
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