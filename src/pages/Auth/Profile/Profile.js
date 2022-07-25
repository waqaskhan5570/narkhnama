import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import ComplaintCountBox from "../../../components/Profile/ComplaintCountBox/ComplaintCountBox";
import ComplaintList from "../../../components/Profile/ComplaintList/ComplaintList";
import Loader from "../../../components/UI/Loader/Loader";
import {
  FaBalanceScale,
  FaRegCheckCircle,
  FaRegHandPointRight,
} from "react-icons/fa";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

function Profile() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [complaints, setComplaints] = useState(null);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  useEffect(() => {
    getComplaints();
  }, [user]);

  const getComplaints = () => {
    axios
      .get(`${BACKEND_URL}/complaints`, config)
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  if (!isAuthenticated) {
    return <Navigate to="/narkhnama-portal" />;
  }

  let pending = [];
  if (complaints) {
    pending = complaints.data.filter(
      (complaint) => complaint.status === "pending"
    );
  }

  let resolved = [];
  if (complaints) {
    resolved = complaints.data.filter(
      (complaint) => complaint.status === "resolved"
    );
  }
  return (
    <ContainerLayout>
      <div className="main-content">
        {complaints ? (
          <section className="profile-wrapper">
            <div className="complaints-summary">
              <Title color="red">Complaints Summary</Title>

              <div className="row">
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="total"
                    icon={<FaBalanceScale />}
                    value={complaints.data.length}
                  />
                </div>
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="resolved"
                    icon={<FaRegCheckCircle />}
                    value={resolved.length}
                  />
                </div>
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="pending"
                    icon={<FaRegHandPointRight />}
                    value={pending.length}
                  />
                </div>
              </div>
            </div>
            <div className="complaints-list mt-4">
              <Title color="green">Complaints List</Title>
              <ComplaintList complaints={complaints.data} />
            </div>
          </section>
        ) : (
          <Loader />
        )}
      </div>
    </ContainerLayout>
  );
}

export default Profile;
