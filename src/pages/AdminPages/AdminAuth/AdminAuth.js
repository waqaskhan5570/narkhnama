import React, { useState } from "react";
import Title from "../../../components/UI/Typography/Title/Title";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../../Auth/Login/login-data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  ADMIN_LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from "../../../store/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";

function AdminAuth() {
  const { isAdminAuthenticated, isLoggingIn } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  if (isAdminAuthenticated) {
    return <Navigate to="/admin-panel/dashboard" />;
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
    try {
      dispatch(LOGIN_REQUEST());
      axios
        .post(`${BACKEND_URL}/auth/login`, loginData)
        .then((res) => {
          if (res.data.user.role === "admin") {
            dispatch(ADMIN_LOGIN_SUCCESS(res.data));
          } else {
            toast.error("Unauthorized Person, this is for admins only");
            dispatch(LOGIN_FAILURE());
          }
        })
        .catch((err) => {
          toast.error(err.response.data);
          dispatch(LOGIN_FAILURE());
        });
    } catch (err) {
      toast.error(err.response.data);
      dispatch(LOGIN_FAILURE());
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
                  <Title color="green">Admin Login</Title>
                </div>
                <div className="m-4">
                  <AuthForm
                    data={formData}
                    handleSubmit={handleSubmit}
                    inputChangeHandler={(e) => inputChangeHandler(e)}
                    btnText="Login"
                    values={loginData}
                    loading={isLoggingIn}
                  />
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

export default AdminAuth;
