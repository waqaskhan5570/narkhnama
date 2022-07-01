import React, { useState } from "react";
import ContainerLayout from "../../components/Layouts/ContainerLayout/ContainerLayout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./FileComplaint.css";
import Title from "../../components/Typography/Title/Title";
import ComplaintForm from "../../components/Forms/ComplaintForm/ComplaintForm";

function FileComplaint() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [complaintData, setComplaintData] = useState({});
  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" />;
  }

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setComplaintData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(complaintData));
  };

  return (
    <ContainerLayout>
      <div className="main-content">
        <Title>Complaint Section </Title>
        <section className="complaint-wrapper">
          <ComplaintForm
            handleSubmit={handleSubmit}
            inputChangeHandler={inputChangeHandler}
          />
        </section>
      </div>
    </ContainerLayout>
  );
}

export default FileComplaint;
