import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ComplaintCard.css";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import UpdateComplaintStatus from "../../Modals/UpdateComplaintStatus/UpdateComplaintStatus";

function ComplaintCard(props) {
  const {
    id,
    subject,
    retailer,
    description,
    location,
    status,
    pageFor,
    setStatus,
  } = props;

  const [newStatus, setNewStatus] = useState();
  const [show, setShow] = useState(false);

  const { user } = useSelector((state) => state.auth);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  const handleStatus = () => {
    if (status === "pending") {
      setNewStatus("resolved");
      console.log(newStatus);
    } else {
      setNewStatus("pending");
      console.log(newStatus);
    }
  };

  const updateComplaintStatus = async () => {
    await axios
      .put(`${BACKEND_URL}/complaints/${id}`, { status: newStatus }, config)
      .then((res) => {
        toast.success("Complaint Status Changed for :" + subject);
        setStatus(newStatus);
      })
      .catch((err) => toast.error(err.response));
  };

  return (
    <div className="complaint-card">
      <h4 className="comp-heading">{subject}</h4>
      <div className="comp-details">
        <div className="d-flex justify-content-between">
          <p>
            <span>Retailer</span> :{retailer}
          </p>

          <Button
            variant={status === "pending" ? "warning" : "success"}
            disabled
          >
            {status === "pending" ? "Pending" : "Resolved"}
          </Button>
        </div>

        <div className="d-flex justify-content-between">
          <p>
            <span>Location</span> : {location}
          </p>
          {pageFor === "admin" && (
            <div className="mt-2">
              <Button variant="secondary" onClick={() => setShow(true)}>
                Change Status
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="comp-description">
        <h5 className="text-secondary mt-2"> Description</h5>
        <p>{description}</p>
      </div>
      {/* Modal */}
      {pageFor === "admin" && (
        <UpdateComplaintStatus
          status={status}
          show={show}
          setShow={setShow}
          updateComplaintStatus={updateComplaintStatus}
          handleStatus={handleStatus}
          subject={subject}
        />
      )}
    </div>
  );
}

export default ComplaintCard;
