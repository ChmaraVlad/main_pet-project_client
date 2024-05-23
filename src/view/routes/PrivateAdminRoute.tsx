import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// services
import { useGetUserAdminDataQuery } from '../../services/userApi';

const PrivateAdminRoute = ({ redirectPath = '/' }) => {
    const {isSuccess, isLoading} = useGetUserAdminDataQuery('')

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!isSuccess) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default PrivateAdminRoute;
