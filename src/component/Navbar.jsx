import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import QuoteModal from '../pages/QuoteModel';

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    setIsAdmin(role === 'admin');
  }, [location]); // Update on route change

  const handleLogout = () => {
    localStorage.removeItem('role');
    setIsAdmin(false);
    navigate('/');
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" light className="shadow-sm bg-white fixed-top py-2 px-1">
      <NavbarBrand tag={Link} to="/" className="fw-bold fs-4 text-primary text-dark">
        <img
          width="125px"
          src="/images/sharmalogo2.png"
          alt="Sharma Interior Logo"
          className="logo-img"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
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
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About us
            </NavLink>
          </NavItem>
          <NavItem>
            <button className="btn btn-danger mx-2" onClick={() => setShowModal(true)}>
              Get Free Quote
            </button>
            <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
          </NavItem>

          {isAdmin ? (
            <>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/admin/leads"
                  className={location.pathname === '/admin/leads' ? 'active' : ''}
                >
                  Leads Panel
                </NavLink>
              </NavItem>
              <NavItem>
                <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink
                tag={Link}
                to="/admin-login"
                className={location.pathname === '/admin-login' ? 'active' : ''}
              >
                Admin Login
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;
