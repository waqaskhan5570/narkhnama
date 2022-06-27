import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="footer-left footer-links">
              <h3>Quick Links</h3>
              <hr />
              <p>
                <Link to="/" className="links">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about-narkhnama" className="links">
                  About
                </Link>
              </p>
              <p>
                <Link to="/price-lists" className="links">
                  Price Lists
                </Link>
              </p>
              <p>
                <Link to="/file-complaint" className="links">
                  File Complaint
                </Link>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="footer-right footer-links">
              <h3>Related Links</h3>
              <hr />
              <p>
                <a
                  href="https://pakistan.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Government of Pakistan
                </a>
              </p>
              <p>
                <a
                  href="https://punjab.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Government of Punjab
                </a>
              </p>
              <p>
                <a
                  href="https://www.sindh.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Government of Sindh
                </a>
              </p>
              <p>
                <a
                  href="https://balochistan.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Government of Balochistan
                </a>
              </p>
              <p>
                <a href="https://kp.gov.pk/" target="_blank" className="links">
                  Government of Khyber Pukhtunkhwa
                </a>
              </p>

              <p>
                <a
                  href="https://gilgitbaltistan.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Gilgit Baltistan
                </a>
              </p>
              <p>
                <a href="https://ajk.gov.pk/" target="_blank" className="links">
                  Azad Kashmir
                </a>
              </p>
              <p>
                <a
                  href="https://citizenportal.gov.pk/"
                  target="_blank"
                  className="links"
                >
                  Citizen Portal
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
