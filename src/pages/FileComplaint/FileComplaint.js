import React, { useState } from "react";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import "./FileComplaint.css";
import Title from "../../components/UI/Typography/Title/Title";
import ComplaintForm from "../../components/UI/Forms/ComplaintForm/ComplaintForm";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";

function FileComplaint() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    status: "pending",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" />;
  }

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let config = "";
  if (user) {
    config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/complaints`, data, config);
      toast.success("Complaint has been filed");
      setData({
        status: "pending",
      });
      navigate("/citizen-profile");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <ContainerLayout>
      <div className="main-content">
        <Title>Complaint Section </Title>
        <section className="complaint-wrapper">
          <ComplaintForm
            handleSubmit={handleSubmit}
            inputChangeHandler={inputChangeHandler}
            values={data}
            loading={loading}
          />
        </section>
      </div>
    </ContainerLayout>
  );
}

export default FileComplaint;
