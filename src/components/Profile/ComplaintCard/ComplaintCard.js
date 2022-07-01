import React from "react";
import { Button } from "react-bootstrap";
import "./ComplaintCard.css";

function ComplaintCard(props) {
  const { subject, retailer, location, status } = props;
  return (
    <div className="complaint-card">
      <h4 className="comp-heading">{subject}</h4>
      <div className="comp-details">
        <div className="d-flex justify-content-between">
          <p>
            <span>Retailer</span> :{retailer}
          </p>
          <Button
            variant={status === "pending" ? "warning" : "danger"}
            disabled
          >
            {status === "pending" ? "Pending" : "Resolved"}
          </Button>
        </div>
        <p>
          <span>Location</span> : {location}
        </p>
      </div>
      <div className="comp-description">
        <h5 className="text-secondary mt-2"> Description</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni
          odit similique eveniet labore eos tenetur, aut voluptas reprehenderit
          ipsam ipsa incidunt? Officia, eos iste veniam aliquid dicta accusamus
          illo ratione, sequi, voluptatibus ex nisi qui sint illum tenetur
          assumenda.
        </p>
      </div>
    </div>
  );
}

export default ComplaintCard;
