import React from "react";
import "./Text.css";
import PropTypes, { oneOf } from "prop-types";

function Text(props) {
  const textClassName = ["main-text", props.color, props.align, props.size];
  return <p className={textClassName.join(" ")}>{props.children}</p>;
}

Text.propTypes = {
  color: PropTypes.oneOf(["red", "green", "white"]),
  align: PropTypes.oneOf(["center"]),
  size: PropTypes.oneOf(["sm", "lg"]), //sm default
};

export default Text;
