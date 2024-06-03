// Core
import React, { FC } from 'react';
import styled from 'styled-components';

import { ErrorBoundary } from '../../components/ErrorBoundary';


import useAppSelector from '../../../hooks/useSelectorCustom'


const AccountPageWrapper = styled.div.attrs({
className: 'AuthPageWrapper'
})`
    text-align: center;
`;


const AdminPage: FC = () => {
    const user = useAppSelector(({auth}) => auth.user)
    
    return (
      <AccountPageWrapper>
        <h1>User Admin page</h1>
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
        <AdminPage />
    </ErrorBoundary>
)