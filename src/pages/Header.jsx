import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import '../style/header.css';
import { useToggle } from '../hooks/useToggle';

const Header = () => {
  const [state, toggle] = useToggle(false)
  const brandVisible = state ? {
    visibility: "hidden",
    pointerEvents: "none"
  } : {
    visibility: "visible",
    pointerEvents: "visible"
  }

  return (
    <Navbar bg="white" expand="lg" sticky='top' expanded={state}>
      <Navbar.Brand href="#home" className="ms-0 my-3" style={brandVisible}>
        <img src="src/assets/icons/logo.svg" className="img-fluid" alt="Logo" style={{ width: '36px', height: '36px' }} />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={toggle}
        className="btn-neutral-50 burger p-2 rounded-3"
      >
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto fw-semibold">
          <Nav.Link href="#home" onClick={() => state ? toggle() : null}>Home</Nav.Link>
          <Nav.Link href="#create" onClick={() => state ? toggle() : null}>Top Sales</Nav.Link>
          <Nav.Link href="#collections" onClick={() => state ? toggle() : null}>Collections</Nav.Link>
          <Nav.Link href="#blog" onClick={() => state ? toggle() : null}>Our Blog</Nav.Link>
          <Nav.Link href="#about" onClick={() => state ? toggle() : null}>About Us</Nav.Link>
        </Nav>
        <Nav className="ml-auto fw-semibold d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-md-evenly">
            <Nav.Link href="#profile" className="px-4 me-4" onClick={() => state ? toggle() : null}>Sign Up</Nav.Link>
            <Button variant="outline-dark" className=" btn-neutral-800 rounded-5 connect px-4" onClick={() => state ? toggle() : null}>Connect Wallet</Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
