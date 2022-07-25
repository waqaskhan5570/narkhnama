import React from "react";
import EnrolledImage from "../../../assets/images/enrolledCourses.png";
import "./ComplaintCountBox.css";

function ComplaintCountBox(props) {
  const { title, icon, value } = props;
  return (
    <main>
      <div className={`card-container ${title} `}>
        <div className="card-icon-container">{icon}</div>
        <div className="card-text-container enrolled">
          <h4>{title}</h4>
          <p>{value}</p>
        </div>
      </div>
    </main>
  );
}

export default ComplaintCountBox;
