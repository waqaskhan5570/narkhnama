import React from "react";
import "./ContainerLayout.css";
import NavigationBar from "../../NavigationBar/NavigationBar";
import Footer from "../../Footer/Footer";

function ContainerLayout(props) {
  return (
    <div className="main-container">
      <div className="main-navbar">
        <NavigationBar />
      </div>
      <div className="main-body">{props.children}</div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ContainerLayout;
