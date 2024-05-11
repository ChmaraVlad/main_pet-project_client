// Core
import React, { FC } from 'react';

import { ErrorBoundary } from '../../components/ErrorBoundary';

import AuthForm from '../../components/AuthForm/'


import {AuthPageWrapper} from './styles'

const Root: FC = () => {

    return (
        <AuthPageWrapper>
            <h1>Auth Page</h1>
            <AuthForm />
        </AuthPageWrapper>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
)
