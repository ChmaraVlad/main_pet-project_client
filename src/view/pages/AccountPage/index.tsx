// Core
import React, { FC } from 'react';
import styled from 'styled-components';

import { ErrorBoundary } from '../../components/ErrorBoundary';


import useSelectorCustom from '../../../hooks/useSelectorCustom'


const AccountPageWrapper = styled.div.attrs({
className: 'AuthPageWrapper'
})`
    text-align: center;
`;


const AccountPage: FC = () => {
    const user = useSelectorCustom(({auth}) => auth.user)
    
    return (
      <AccountPageWrapper>
        <h1>User page</h1>
        {user ? (
          <>
            <p>email: {user?.email}</p>
            <p>username: {user?.username}</p>
          </>
        ) : null}
      </AccountPageWrapper>
    );
};

export default () => (
    <ErrorBoundary>
        <AccountPage />
    </ErrorBoundary>
)