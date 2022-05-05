import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebase.init';
import Loading from './Loading';
import VerifyEmail from './VerifyEmail';

const RequireAuthMyItems = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <VerifyEmail />
    }

    return children;
};

export default RequireAuthMyItems;