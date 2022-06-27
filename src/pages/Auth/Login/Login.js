import React from "react";
import ContainerLayout from "../../../components/Layouts/ContainerLayout/ContainerLayout";
import "./Login.css";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../../store/auth";

function Login() {
  let usernIfo = {
    name: "Waqas",
    email: "wa545@gm.com",
    id: "!@123",
  };
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Navigate to="/file-complaint" />;
  }
  return (
    <ContainerLayout>
      <div className="main-content">
        <h1>Log in</h1>
        <p>Auth : {isAuthenticated ? "true" : "false"}</p>
        {isAuthenticated ? (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={() =>
            dispatch(
              !isAuthenticated ? LOGIN_SUCCESS(usernIfo) : LOGOUT_SUCCESS()
            )
          }
        >
          {isAuthenticated ? "log out" : "log in"}
        </button>
      </div>
    </ContainerLayout>
  );
}

export default Login;
