import React from "react";
import ComplaintCard from "../ComplaintCard/ComplaintCard";

function ComplaintList({ complaints, pageFor, setStatus }) {
  return (
    <div className="row">
      {complaints &&
        complaints.map((complaint) => (
          <div className="col mb-3" key={complaint._id}>
            <ComplaintCard
              id={complaint._id}
              subject={complaint.subject}
              retailer={complaint.retailerName}
              location={complaint.retailerAddress}
              description={complaint.description}
              pageFor={pageFor}
              setStatus={setStatus}
              status={complaint.status}
            />
          </div>
        ))}
    </div>
  );
}

export default ComplaintList;
