import React from "react";
import ComplaintCard from "../ComplaintCard/ComplaintCard";

function ComplaintList({ complaints }) {
  return (
    <div className="row">
      {complaints &&
        complaints.map((complaint) => (
          <div className="col mb-3">
            <ComplaintCard
              subject={complaint.subject}
              retailer={complaint.retailerName}
              location={complaint.retailerAddress}
              description={complaint.description}
              status={complaint.status}
            />
          </div>
        ))}
    </div>
  );
}

export default ComplaintList;
