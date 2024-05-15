// Core
import React, { FC } from 'react';
import styled from 'styled-components'

import { ErrorBoundary } from '../../components/ErrorBoundary';


const HomePageWrapper = styled.div.attrs({
className: 'AuthPageWrapper'
})`
    text-align: center;
`;

const Root: FC = () => {
    
    return (
        <HomePageWrapper>
            <h1>Home page</h1>
        </HomePageWrapper>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
)