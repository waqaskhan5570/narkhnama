import React from "react";
import ContainerLayout from "../../../components/Layouts/ContainerLayout/ContainerLayout";
import "./Signup.css";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/file-complaint" />;
  }
  return (
    <ContainerLayout>
      <div className="main-content">Signup</div>
    </ContainerLayout>
  );
}

export default Signup;
