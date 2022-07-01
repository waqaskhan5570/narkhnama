import React from "react";
import ComplaintCard from "../ComplaintCard/ComplaintCard";

function ComplaintList() {
  return (
    <div className="row">
      <div className="col mb-3">
        <ComplaintCard
          subject="VeryHigh prices stupid"
          retailer="waqas"
          location="shop#3, street#4, din bahar, peshawar"
          status="pending"
        />
      </div>
      <div className="col mb-3">
        <ComplaintCard
          subject="VeryHigh prices stupid"
          retailer="waqas"
          location="shop#3, street#4, din bahar, peshawar"
          status="resolved"
        />
      </div>
      <div className="col mb-3">
        <ComplaintCard
          subject="VeryHigh prices stupid"
          retailer="waqas"
          location="shop#3, street#4, din bahar, peshawar"
          status="resolved"
        />
      </div>
    </div>
  );
}

export default ComplaintList;
