import React from "react";
import "./IndexButton.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

function IndexButton(props) {
  return (
    <div className="index-button">
      <Link to={props.link}>
        <div className="d-flex">
          <p>{props.children}</p>
          <p className="ms-auto">
            <FaArrowRight />
          </p>
        </div>
      </Link>
    </div>
  );
}

IndexButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default IndexButton;
