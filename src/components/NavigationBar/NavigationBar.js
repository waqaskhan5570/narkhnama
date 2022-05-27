import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navigationBar-wrapper">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Narkhnama</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about-narkhnama">About Narkhnama</Nav.Link>
              <Nav.Link href="/price-lists">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/file-complaint"
                className="btn btn-warning text-uppercase "
              >
                File a Complaint
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavigationBar;
