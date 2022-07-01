import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../../assets/images/NarkhnamaLogo.png";
import "./NavigationBar.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../../store/auth";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";

function NavigationBar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navigationBar-wrapper">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" width="60px" height="60px" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-narkhnama">About Narkhnama</Nav.Link>
              <Nav.Link href="/price-lists">Price List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/citizen-profile">
                <FaUserAlt />
              </Nav.Link>
              <Nav.Link
                href="/file-complaint"
                className="btn btn-warning text-uppercase "
              >
                File a Complaint
              </Nav.Link>
              {isAuthenticated ? (
                <Nav>
                  <Button
                    onClick={() => dispatch(LOGOUT_SUCCESS())}
                    variant="danger"
                  >
                    <FaSignOutAlt />
                  </Button>
                </Nav>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavigationBar;
