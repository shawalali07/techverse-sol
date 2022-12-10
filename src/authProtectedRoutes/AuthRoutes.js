import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import isEmpty from '../utils/isEmpty';

const AuthRoutes = ({ children, redirectLink }) => {
  const location = useLocation();
  const token = useToken();
  if (!isEmpty(token)) {
    return (
      <Navigate
        to={location.state?.pathName ? location.state?.pathName : redirectLink}
        replace
      />
    );
  }
  return children;
};

export default AuthRoutes;
