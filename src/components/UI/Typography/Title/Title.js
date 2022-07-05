import React from "react";
import "./Title.css";
import PropTypes from "prop-types";

function Title(props) {
  const titleClassName = ["main-title", props.color, props.align];
  return <h1 className={titleClassName.join(" ")}>{props.children}</h1>;
}

Title.propTypes = {
  color: PropTypes.oneOf(["red", "green", "white"]),
  align: PropTypes.oneOf(["center"]),
};

export default Title;
