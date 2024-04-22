import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../store/authenticationSlice.js';

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
