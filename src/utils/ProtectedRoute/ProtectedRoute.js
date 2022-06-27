import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" replace />;
  }

  return children;
};

export default ProtectedUserRoute;
