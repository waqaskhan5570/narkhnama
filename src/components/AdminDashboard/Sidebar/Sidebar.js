import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/NarkhnamaLogo.png";
import {
  FaColumns,
  FaCopy,
  FaGlobeAfrica,
  FaProjectDiagram,
  FaThLarge,
  FaTimesCircle,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar(props) {
  const [isSlider, setIsSlider] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    if (window.screen.width < 991) {
      setIsSlider(true);
    }
  }, []);

  const closeSlider = () => {
    sidebarRef.current.style.transform = "scaleX(0)";
  };

  return (
    <div
      id="adminSidebar"
      ref={sidebarRef}
      className={`Sidebar ${isSlider ? "slider" : ""}`}
      style={{ width: isSlider ? "80%" : `${props.sidebarWidth}px` }}
    >
      <div className="Sidebar-Body">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          <button
            className="close-sidebar-btn d-lg-none d-block"
            onClick={closeSlider}
          >
            <FaTimesCircle />
          </button>
        </div>
        <div className="navigation">
          <div className="navigation-item">
            <Link
              to="/hero-dashboard"
              className={
                window.location.pathname === "/hero-dashboard"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaThLarge />
              </div>
              <div className="item-text">Dashboard</div>
            </Link>
          </div>
          <div className="navigation-item">
            <Link
              to="/hero-createcause"
              className={
                window.location.pathname ===
                ("/hero-createcause" || "/hero-createenterprise")
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaCopy />
              </div>
              <div className="item-text">Start a Fundraiser</div>
            </Link>
          </div>

          <div className="navigation-item">
            <Link
              to="/hero-managecauses"
              className={
                window.location.pathname === "/hero-managecauses"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaProjectDiagram />
              </div>
              <div className="item-text">Manage Causes</div>
            </Link>
          </div>
          <div className="navigation-item">
            <Link
              to="/hero-manageenterprises"
              className={
                window.location.pathname === "/hero-manageenterprises"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaColumns />
              </div>
              <div className="item-text">Manage Enterprises</div>
            </Link>
          </div>
          <div className="navigation-item">
            <Link
              to="/tribe-world"
              className={
                window.location.pathname === "/tribe-world"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaGlobeAfrica />
              </div>
              <div className="item-text">Tribe World</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
