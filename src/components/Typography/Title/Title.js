import React from "react";
import "./Title.css";

function Title(props) {
  const titleClassName = ["main-title", props.color, props.align];
  return <h1 className={titleClassName.join(" ")}>{props.children}</h1>;
}

export default Title;
