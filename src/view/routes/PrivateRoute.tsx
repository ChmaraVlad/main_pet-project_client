import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from '../../store/slices/auth/authApiSlice';

const PrivateRoute = ({ redirectPath = '/login' }) => {
    const {isSuccess, isLoading} = useGetUserQuery('')

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!isSuccess) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;