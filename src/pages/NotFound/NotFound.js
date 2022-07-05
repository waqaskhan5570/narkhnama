import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "./NotFound.css";

function NotFound() {
  return (
    <ContainerLayout>
      <div
        className="container m-5 text-center notFound"
        style={{ minHeight: "50vh" }}
      >
        <h1 className="text-danger">ERROR 404</h1>
        <h4 className="text-success">Page Not Found</h4>
        <Link to="/">
          <Button variant="outline-danger">Go Back to Home</Button>
        </Link>
      </div>
    </ContainerLayout>
  );
}

export default NotFound;
