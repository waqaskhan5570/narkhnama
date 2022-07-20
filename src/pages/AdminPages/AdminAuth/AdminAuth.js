import React, { useState } from "react";
import Title from "../../../components/UI/Typography/Title/Title";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../../Auth/Login/login-data.json";
import { useSelector, useDispatch } from "react-redux";
import { ADMIN_LOGIN_SUCCESS } from "../../../store/auth";
import { Navigate } from "react-router-dom";

function AdminAuth() {
  const { isAdminAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email_phone: "",
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
    dispatch(ADMIN_LOGIN_SUCCESS(loginData));
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
