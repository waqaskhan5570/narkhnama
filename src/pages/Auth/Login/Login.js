import React, { useState } from "react";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "../Auth.css";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../../components/UI/Typography/Title/Title";
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
} from "../../../store/auth";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../Login/login-data.json";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../utils/constants";

function Login({ pageFor }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, isLoggingIn } = useSelector((state) => state.auth);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(LOGIN_REQUEST());
      const res = await axios.post(`${BACKEND_URL}/auth/login`, loginData);
      dispatch(LOGIN_SUCCESS(res.data));
    } catch (error) {
      dispatch(LOGIN_FAILURE());
      toast.error("Invalid Credentials");
    }
  };

  return (
    <ContainerLayout>
      <main className="auth-wrapper">
        <section className="auth-sections">
          <div className="row">
            <div className="col-12 col-lg-5 auth-left">
              <section className="main-section">
                <div className="welcome-message">
                  <Title color="green">Login / لاگ ان کریں</Title>
                </div>
                <div className="m-4">
                  <AuthForm
                    data={formData}
                    handleSubmit={handleSubmit}
                    inputChangeHandler={(e) => inputChangeHandler(e)}
                    btnText="Login"
                    loading={isLoggingIn}
                  />
                </div>
                {pageFor !== "admin" && (
                  <div className="alternate_method">
                    <p>
                      Don't Have an Account ?{" "}
                      <Link to="/signup">Register Here</Link>
                    </p>
                  </div>
                )}
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
