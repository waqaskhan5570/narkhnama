import React, { useState } from "react";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "../Auth.css";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../../components/UI/Typography/Title/Title";
import { LOGIN_SUCCESS } from "../../../store/auth";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../Login/login-data.json";

function Login() {
  const [loginData, setLoginData] = useState({
    email_phone: "",
    password: "",
  });

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Navigate to="/file-complaint" />;
  }

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LOGIN_SUCCESS(loginData));
  };

  return (
    <ContainerLayout>
      <main className="auth-wrapper">
        <section className="auth-sections">
          <div className="row">
            <div className="col-12 col-lg-5 auth-left">
              <section className="main-section">
                <div className="welcome-message">
                  <Title color="green">
                    Login / <br /> لاگ ان کریں
                  </Title>
                </div>
                <div className="m-4">
                  <AuthForm
                    data={formData}
                    handleSubmit={handleSubmit}
                    inputChangeHandler={(e) => inputChangeHandler(e)}
                    btnText="Login"
                  />
                </div>
                <div className="alternate_method">
                  <p>
                    Don't Have an Account ?{" "}
                    <Link to="/signup">Register Here</Link>
                  </p>
                </div>
              </section>
            </div>
            <div className="col-7 auth-login-right"></div>
          </div>
        </section>
      </main>
    </ContainerLayout>
  );
}

export default Login;
