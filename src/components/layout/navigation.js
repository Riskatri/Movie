import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import facedetection from "../facedetection";

function Navigation() {
  // const token = JSON.parse(
  //   sessionStorage.getItem("persisted_state_hook:token")
  // );
  function logout() {
    // sessionStorage.setItem("persisted_state_hook:token", "");
    localStorage.clear();
  }
  const token = localStorage.getItem("jwtToken");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (!token) {
    return (
      <Navbar color="lnavbar navbar-right bg-dark" light expand="md">
        <NavbarBrand href={"/"} className="text-light">
          Movie
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/login" tag={RRNavLink}>
                LOGIN
              </NavLink>
            </NavItem>
          </Nav>

          <NavItem>
            <NavLink to="/register" tag={RRNavLink}>
              Register
            </NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar color="lnavbar navbar bg-dark " light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/movies" tag={RRNavLink} className="text-light">
                list Movie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/face" tag={RRNavLink} className="text-light">
                face
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/media" tag={RRNavLink} className="text-light">
                take a photo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={logout}
                to="/login"
                tag={RRNavLink}
                className="text-light"
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
