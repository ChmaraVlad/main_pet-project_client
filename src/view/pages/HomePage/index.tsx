// Core
import React, { FC } from 'react';
import { ErrorBoundary } from '../../Components/ErrorBoundary';


const Root: FC = () => {
    return (
        <h1>Home page</h1>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
)