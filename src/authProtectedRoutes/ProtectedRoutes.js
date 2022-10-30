import React from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from '../hooks/register/useToken';
import { browserRoutes } from '../routes/browserRoutes';
import isEmpty from '../utils/isEmpty';

const ProtectedRoutes = ({ children, redirectLink }) => {
  const token = useToken();
  if (isEmpty(token)) {
    return (
      <Navigate
        to={redirectLink ? redirectLink : browserRoutes.SIGNIN}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoutes;
