import React from "react";
import IndexButton from "../../components/UI/Buttons/IndexButton/IndexButton";
import "./NarkhnamaPortal.css";
import NarkhnamaLogo from "../../assets/images/NarkhnamaLogo.png";
import Title from "../../components/UI/Typography/Title/Title";
import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

function NarkhnamaPortal() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/file-complaint" />;
  }

  return (
    <main className="portal-wrapper">
      <section className="portal-sections">
        <div className="row">
          <div className="col-12 col-lg-5 portal-left">
            <section className="main-section">
              <Link to="/">
                <div className="logo-image">
                  <img src={NarkhnamaLogo} alt="Narkhnama-logo" />
                </div>
              </Link>
              <div className="welcome-message">
                <Title color="green">
                  Welcome / <br /> خوش آمدید معزز شہری
                </Title>
              </div>
              <div className="buttons-wrappers">
                <IndexButton link="/login">
                  Log In / <br /> Registered Member
                </IndexButton>
                <br />
                <IndexButton link="/signup">
                  Sign Up / <br /> New Member
                </IndexButton>
              </div>
            </section>
          </div>
          <div className="col-7 portal-right"></div>
        </div>
      </section>
    </main>
  );
}

export default NarkhnamaPortal;
