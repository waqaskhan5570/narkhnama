import React from "react";
import "./Text.css";

function Text(props) {
  const textClassName = ["main-text", props.color, props.align];
  return <p className={textClassName.join(" ")}>{props.children}</p>;
}

export default Text;
