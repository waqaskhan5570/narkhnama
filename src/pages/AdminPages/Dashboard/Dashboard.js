import React from "react";
import "./Dashboard.css";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import ComplaintCountBox from "../../../components/Profile/ComplaintCountBox/ComplaintCountBox";
import {
  FaBalanceScale,
  FaRegCheckCircle,
  FaRegHandPointRight,
} from "react-icons/fa";

function Dashboard() {
  return (
    <AdminLayout>
      <Title>Admin Dashboard</Title>
      <main className="dashboard_Wrapper">
        <div className="price_lists_details">
          <div className="d-flex justify-content-around">
            <p className="heading">Last Price List Updated on:</p>
            <p className="date">Data: 18/8/2022</p>
          </div>
        </div>
        {/* complaints section */}
        <section className="about_complaints mt-5">
          <div className="complaints-summary">
            <Title color="red">Complaints Summary</Title>
            <div className="row">
              <div className="col mb-2">
                <ComplaintCountBox
                  title="total filed"
                  icon={<FaBalanceScale />}
                />
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
        </section>
      </main>
    </AdminLayout>
  );
}

export default Dashboard;
