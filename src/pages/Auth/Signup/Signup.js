import React, { useState } from "react";
import ContainerLayout from "../../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "../Auth.css";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../../components/UI/Typography/Title/Title";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from "../../../store/auth";
import AuthForm from "../../../components/UI/Forms/Form";
import formData from "../Signup/signup.json";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../utils/constants";

function Signup() {
  const { isAuthenticated, isLoggingIn } = useSelector((state) => state.auth);
  const [currentTab, setcurrentTab] = useState(1);
  const dispatch = useDispatch();

  const handleTabChange = (change, e) => {
    e.preventDefault();
    if (change === "next") {
      setcurrentTab(currentTab + 1);
    } else {
      setcurrentTab(currentTab - 1);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const raw = {
      name: registrationData.name,
      email: registrationData.email,
      phone_number: registrationData.phone_number,
      password: registrationData.password,
      // cnic: registrationData.cnic,
      address: {
        address: registrationData.address,
        city: registrationData.city,
        province: registrationData.province,
        postal_code: registrationData.postal_code,
      },
    };
    try {
      dispatch(LOGIN_REQUEST());
      const res = await axios.post(`${BACKEND_URL}/auth/signup`, raw);
      dispatch(LOGIN_SUCCESS(res.data));
    } catch (error) {
      dispatch(LOGIN_FAILURE());
      toast.error(error.message);
    }
  };

  console.log(formData.stepOne["0"]);

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
                <div className="mt-5">
                  {currentTab === 1 ? (
                    <AuthForm
                      data={formData.stepOne["0"]}
                      values={registrationData}
                      handleSubmit={(e) => handleTabChange("next", e)}
                      inputChangeHandler={(e) => inputChangeHandler(e)}
                      btnText="Next"
                      loading={isLoggingIn}
                    />
                  ) : currentTab === 2 ? (
                    <AuthForm
                      data={formData.stepTwo["0"]}
                      values={registrationData}
                      handleSubmit={(e) => handleTabChange("next", e)}
                      inputChangeHandler={(e) => inputChangeHandler(e)}
                      btnText="Next"
                      loading={isLoggingIn}
                    />
                  ) : currentTab === 3 ? (
                    <AuthForm
                      data={formData.stepThree["0"]}
                      values={registrationData}
                      handleSubmit={handleSubmit}
                      inputChangeHandler={(e) => inputChangeHandler(e)}
                      btnText="Register"
                      loading={isLoggingIn}
                    />
                  ) : null}
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
