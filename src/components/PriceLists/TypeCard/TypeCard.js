import React from "react";
import "./TypeCard.css";
// import defaultImage from "../../../assets/images/vegetables.webp";
import { Link } from "react-router-dom";

function TypeCard(props) {
  const { heading, bg, to } = props;
  // const image = bg ? bg : defaultImage;
  const typeCardClasses = ["intro-block", to];
  return (
    <>
      {" "}
      <Link to={`${to}`} className="col-sm-4 typeCard">
        <div className={typeCardClasses.join(" ")}>
          <h3>{heading}</h3>
          <div className="overlay"></div>
        </div>
      </Link>
    </>
  );
}

export default TypeCard;
