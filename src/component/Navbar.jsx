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
import QuoteModal from '../pages/QuoteModel';

function NavigationBar() {

 const [showModal, setShowModal] = useState(false);

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
          {/* <NavItem>
            <NavLink
              tag={Link}
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              tag={Link}
              to="/estimate"
              className={location.pathname === '/estimate' ? 'active' : ''}
            >
              Estimate
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              tag={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About us
            </NavLink>
          </NavItem>
          <NavItem>
             <div className="App text-center p-2">
      <button
        className="btn btn-danger"
        onClick={() => setShowModal(true)}
      >
        Get Free Quote
      </button>

      <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;
