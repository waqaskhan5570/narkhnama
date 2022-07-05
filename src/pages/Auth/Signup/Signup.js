import React, { useState } from "react";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "../Auth.css";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../../components/UI/Typography/Title/Title";
import { LOGIN_SUCCESS } from "../../../store/auth";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../Signup/signup.json";

function Signup() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [registrationData, setRegistrationData] = useState({});

  if (isAuthenticated) {
    return <Navigate to="/file-complaint" />;
  }

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LOGIN_SUCCESS(registrationData));
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
                    Register / <br />
                    سائن اپ
                  </Title>
                </div>
                <div className="m-4">
                  <AuthForm
                    data={formData}
                    handleSubmit={handleSubmit}
                    inputChangeHandler={(e) => inputChangeHandler(e)}
                    btnText="Register"
                  />
                </div>
                <div className="alternate_method">
                  <p>
                    Already Have an Account ?{" "}
                    <Link to="/login">Login Here</Link>
                  </p>
                </div>
              </section>
            </div>
            <div className="col-7 auth-registration-right"></div>
          </div>
        </section>
      </main>
    </ContainerLayout>
  );
}

export default Signup;
