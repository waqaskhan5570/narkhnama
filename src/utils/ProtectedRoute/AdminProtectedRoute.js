import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ isAdminAuthenticated, children }) => {
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin-panel/auth" replace />;
  }

  return children;
};

export default ProtectedUserRoute;
