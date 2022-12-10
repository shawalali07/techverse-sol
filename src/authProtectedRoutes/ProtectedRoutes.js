import React from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import { browserRoutes } from '../routes/browserRoutes';
import isEmpty from '../utils/isEmpty';

const ProtectedRoutes = ({ children, redirectLink, pathName }) => {
  const token = useToken();
  if (isEmpty(token)) {
    return (
      <Navigate
        state={{ pathName: pathName ? pathName : '' }}
        to={redirectLink ? redirectLink : browserRoutes.SIGNIN}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoutes;
