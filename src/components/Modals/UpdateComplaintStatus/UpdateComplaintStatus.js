import React from "react";
import { Modal, Dropdown, Button } from "react-bootstrap";

function UpdateComplaintStatus(props) {
  const {
    status,
    updateComplaintStatus,
    show,
    setShow,
    handleStatus,
    subject,
  } = props;
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Complaint Status for :{subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle
              variant={status === "pending" ? "warning" : "success"}
              id="dropdown-basic"
            >
              <span className="text-capitalize">{status}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleStatus}>
                {status === "pending" ? "Resolved" : "Pending"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={updateComplaintStatus}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateComplaintStatus;
