import React from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from '../../hooks/register/useToken';
import isEmpty from '../../utils/isEmpty';

const AuthRoutes = ({ children, redirectLink }) => {
  const token = useToken();
  if (!isEmpty(token)) {
    return <Navigate to={redirectLink} replace />;
  }
  return children;
};

export default AuthRoutes;
