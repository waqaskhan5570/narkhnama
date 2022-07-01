import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ContainerLayout from "../../../components/Layouts/ContainerLayout/ContainerLayout";
import Title from "../../../components/Typography/Title/Title";
import "./Profile.css";
import ComplaintCountBox from "../../../components/Profile/ComplaintCountBox/ComplaintCountBox";
import ComplaintList from "../../../components/Profile/ComplaintList/ComplaintList";
import {
  FaBalanceScale,
  FaRegCheckCircle,
  FaRegHandPointRight,
} from "react-icons/fa";

function Profile() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" />;
  }

  return (
    <ContainerLayout>
      <div className="main-content">
        <section className="profile-wrapper">
          <div className="complaints-summary">
            <Title color="red">Complaints Summary</Title>
            <div className="row">
              <div className="col mb-2">
                <ComplaintCountBox title="total" icon={<FaBalanceScale />} />
              </div>
              <div className="col mb-2">
                <ComplaintCountBox
                  title="resolved"
                  icon={<FaRegCheckCircle />}
                />
              </div>
              <div className="col mb-2">
                <ComplaintCountBox
                  title="pending"
                  icon={<FaRegHandPointRight />}
                />
              </div>
            </div>
          </div>
          <div className="complaints-list mt-4">
            <Title color="green">Complaints List</Title>
            <ComplaintList />
          </div>
        </section>
      </div>
    </ContainerLayout>
  );
}

export default Profile;
