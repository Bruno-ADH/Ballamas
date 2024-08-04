import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import '../style/header.css';
import { useToggle } from '../hooks/useToggle';

const Header = () => {
    const [state, toggle] = useToggle(false)

    return (
      <Navbar bg="white" expand="lg" sticky='top' expanded={state}>
        <Navbar.Brand href="#home" className="lg-visible ms-0">
        <img src="src/assets/icons/logo.svg" className="img-fluid" alt="Logo" style={{ width: '36px', height: '36px' }} />
          </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={toggle}
          className="btn-neutral-50 burger"
        >
          <img src={state ? "src/assets/icons/burgerClose-icon.svg" : "src/assets/icons/burger-icon.svg"} alt="Menu Toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-semibold">
            <Nav.Link href="#home" onClick={state ? toggle() : undefined}>Home</Nav.Link>
            <Nav.Link href="#create" onClick={state ? toggle() : undefined}>Top Sales</Nav.Link>
            <Nav.Link href="#collections" onClick={state ? toggle() : undefined}>Collections</Nav.Link>
            <Nav.Link href="#blog" onClick={state ? toggle() : undefined}>Our Blog</Nav.Link>
            <Nav.Link href="#about" onClick={state ? toggle() : undefined}>About Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto fw-semibold d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-md-evenly">
            <Nav.Link href="#profile" className="ml-2" onClick={state ? toggle() : undefined}>Sign Up</Nav.Link>
            <div className="vr ms-3 ms-lg-1 mx-3 align-self-center rounded divider"></div>
            <Button variant="outline-dark" className="ml-2 btn-neutral-800 rounded-5 connect" onClick={state ? toggle() : undefined}>Connect Wallet</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

export default Header;
