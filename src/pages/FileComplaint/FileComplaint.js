import React from "react";
import ContainerLayout from "../../components/Layouts/ContainerLayout/ContainerLayout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function FileComplaint() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" />;
  }

  console.log(isAuthenticated);
  return (
    <ContainerLayout>
      <div className="main-content">
        <h1>Complaint Section</h1>
      </div>
    </ContainerLayout>
  );
}

export default FileComplaint;
