import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  return (
    <Navbar expand="md" light className="shadow-sm bg-white fixed-top py-2 px-4">
      <NavbarBrand tag={Link} to="/" className="fw-bold fs-4 text-primary text-dark">
       SHARMA-INTERIOR
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <NavLink
              tag={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/estimate"
              className={location.pathname === '/estimate' ? 'active' : ''}
            >
              Estimate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <Button color="primary" size="sm" className="ms-3">
              Book Consultation
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;
