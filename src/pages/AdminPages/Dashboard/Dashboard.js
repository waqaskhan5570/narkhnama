import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import ComplaintCountBox from "../../../components/Profile/ComplaintCountBox/ComplaintCountBox";
import {
  FaBalanceScale,
  FaRegCheckCircle,
  FaRegHandPointRight,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../utils/constants";
import { createDateAndTimeFromISO } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import Loader from "../../../components/UI/Loader/Loader";

function Dashboard() {
  const [narkhnama, setNarkhnama] = useState(null);
  const [complaints, setcomplaints] = useState(null);
  const today = new Date();
  const { user } = useSelector((state) => state.auth);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  const getNarkhnama = () => {
    try {
      axios
        .get(`${BACKEND_URL}/narkhnamas`)
        .then((res) => {
          const latest = res.data.data.slice(0, 1);
          setNarkhnama(latest["0"]);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    } catch (error) {
      toast.error("Some Error occured while fetching latest Narkhnama");
    }
  };

  const getComplaints = () => {
    try {
      axios
        .get(`${BACKEND_URL}/complaints`, config)
        .then((res) => {
          const complaintCount = res.data.data;
          const resolved = complaintCount.filter(
            (complaint) => complaint.status === "resolved"
          );

          const pending = complaintCount.filter(
            (complaint) => complaint.status === "pending"
          );

          setcomplaints({
            pending: pending.length,
            resolved: resolved.length,
            total: complaintCount.length,
          });
        })
        .catch((err) => {
          toast.error(err.response.data + " to get all complaints");
        });
    } catch (error) {
      toast.error("Error occured while fetching complaints count");
    }
  };

  useEffect(() => {
    getNarkhnama();
    getComplaints();
  }, []);

  return (
    <AdminLayout>
      <Title>Admin Dashboard</Title>
      <main className="dashboard_Wrapper">
        <div className="price_lists_details">
          <div className="d-flex justify-content-around">
            <div>
              <p>Today's Date</p>
              <p className="heading">
                Last Price List Updated on:{" "}
                <span className="lastUpdatedDate">
                  {narkhnama
                    ? createDateAndTimeFromISO(narkhnama.createdAt, true)
                    : null}
                </span>
              </p>
            </div>
            <p className="curretDate"> {today.toDateString()}</p>
          </div>
        </div>
        {/* complaints section */}
        <section className="about_complaints mt-5">
          <div className="complaints-summary">
            <Title color="red">Complaints Summary</Title>
            {complaints ? (
              <div className="row">
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="total Complaints"
                    icon={<FaBalanceScale />}
                    value={complaints.total}
                  />
                </div>
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="resolved"
                    icon={<FaRegCheckCircle />}
                    value={complaints.resolved}
                  />
                </div>
                <div className="col mb-2">
                  <ComplaintCountBox
                    title="pending"
                    icon={<FaRegHandPointRight />}
                    value={complaints.pending}
                  />
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </main>
    </AdminLayout>
  );
}

export default Dashboard;
