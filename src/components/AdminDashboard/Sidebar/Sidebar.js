import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/NarkhnamaLogo.png";
import {
  FaCopy,
  FaComment,
  FaThLarge,
  FaTimesCircle,
  FaSignOutAlt,
  FaGlobe,
} from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../../../store/auth";

function Sidebar(props) {
  const [isSlider, setIsSlider] = useState(false);
  const sidebarRef = useRef();
  const dispatch = useDispatch();

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
              to="/admin-panel/dashboard"
              className={
                window.location.pathname === "/admin-panel/dashboard"
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
              to="/admin-panel/narkhnamas"
              className={
                window.location.pathname === "/admin-panel/narkhnamas"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaCopy />
              </div>
              <div className="item-text">Narkhnamas</div>
            </Link>
          </div>

          <div className="navigation-item">
            <Link
              to="/admin-panel/narkhnamas/add-narkhnama"
              className={
                window.location.pathname ===
                "/admin-panel/narkhnamas/add-narkhnama"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <MdPostAdd />
              </div>
              <div className="item-text">Add Narkhnama</div>
            </Link>
          </div>

          <div className="navigation-item">
            <Link
              to="/admin-panel/complaints"
              className={
                window.location.pathname === "/admin-panel/complaints"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaComment />
              </div>
              <div className="item-text">Complaints</div>
            </Link>
          </div>

          <div className="navigation-item">
            <Link
              to="/admin-panel/districts"
              className={
                window.location.pathname === "/admin-panel/districts"
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <div className="item-icon">
                <FaGlobe />
              </div>
              <div className="item-text">Handle Districts</div>
            </Link>
          </div>
          <div className="navigation-item">
            <button
              to="/complaints"
              className={
                window.location.pathname === "/complaints"
                  ? "logout_button  navigation-link active"
                  : "logout_button navigation-link"
              }
              onClick={() => dispatch(LOGOUT_SUCCESS())}
            >
              <div className="item-icon">
                <FaSignOutAlt />
              </div>
              <div className="item-text">Log out</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
