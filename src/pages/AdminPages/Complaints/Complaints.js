import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../../../components/UI/Loader/Loader";
import ComplaintList from "../../../components/Profile/ComplaintList/ComplaintList";
import Form from "react-bootstrap/Form";

function Complaints() {
  const [complaints, setComplaints] = useState(null);
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/complaints?status=${status}&limit=200`, config)
      .then((res) => {
        setComplaints(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data);
        setLoading(false);
      });
  }, [status]);

  return (
    <AdminLayout>
      <main>
        <div>
          <Title color="green">Complaints Section</Title>
        </div>
        <section>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="m-3">
                <Form.Select onChange={(e) => handleStatus(e)}>
                  <option disabled>Select Complaint Status to show</option>
                  <option
                    value="pending"
                    selected={status === "pending" ? true : false}
                  >
                    Pending
                  </option>
                  <option
                    value="resolved"
                    selected={status === "resolved" ? true : false}
                  >
                    Resolved
                  </option>
                </Form.Select>
              </div>
              <ComplaintList
                complaints={complaints ? complaints.data : null}
                pageFor="admin"
                setStatus={setStatus}
              />
            </div>
          )}
        </section>
      </main>
    </AdminLayout>
  );
}

export default Complaints;
