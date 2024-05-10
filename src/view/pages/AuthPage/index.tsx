// Core
import React, { FC, useEffect } from 'react';

import { ErrorBoundary } from '../../Components/ErrorBoundary';
import { useLoginMutation } from '../../../services/authApi';

const Root: FC = () => {
    const [login, data] = useLoginMutation()
    const {isLoading, isError} = data
    
    useEffect(()=>{
        login({email: 'john@email.com', password: 'password'})
    },[])

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Error...</h1>

    return (
            <h1>Auth Page</h1>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
)