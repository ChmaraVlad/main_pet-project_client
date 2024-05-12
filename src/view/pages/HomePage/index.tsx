// Core
import React, { FC } from 'react';

import { ErrorBoundary } from '../../components/ErrorBoundary';


import useSelectorCustom from '../../../hooks/useSelectorCustom'
// import { selectCurrentUser } from '../../../store/slices/authSlice';



const Root: FC = () => {
    const state = useSelectorCustom((state) => state)
    // const currentUser = selectCurrentUser()
    
    return (
        <h1>Home page</h1>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
)