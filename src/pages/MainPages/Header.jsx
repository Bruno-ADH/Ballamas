import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../style/header.css';
import { useToggle } from '../../hooks/useToggle';
import { Link } from 'react-router-dom';
import useCartStore from '../../data/useCartStore';

const Header = () => {
  const [state, toggle] = useToggle(false)

  const cartItems = useCartStore.use.cartItems();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  const burgerToggle = () => {
    toggle()
    const brand = document.querySelector('.navbar-wrapper')
    if (brand.className.includes('hidden')) {
      brand.classList.remove('hidden')
    } else {
      brand.classList.add('hidden')
    }
  }

  return (
    <Navbar variant="border-0 border-bottom py-3 border-light-gray fm-archivo fw-normal navbar-wrapper container" bg="white" expand="lg" sticky='top' expanded={state}
    >
      <Navbar.Toggle
        aria-controls="modern-navbar-nav"
        className="burger p-2 rounded-3"
        onClick={burgerToggle}
      >
      </Navbar.Toggle>
      <Navbar.Brand as={Link} to="/" className="ntf"
      >
        <span className='ballamas'></span>
      </Navbar.Brand>

      <Navbar.Collapse id="modern-navbar-nav" className='order-3 order-lg-0 border-0 border-light-gray mt-3 pt-3 mt-lg-0 pt-lg-0'>
        <Nav className="fm-archivo w-100 text-center gap-1">
          {['Men', 'Women', 'Kids', 'Collection'].map((link, index) => (
            <Nav.Link as={Link}
              to="/"
              className='fw-normal'
              onClick={() => state ? burgerToggle() : null}
            >
              {link}
            </Nav.Link>
          ))}
          <Nav.Link as={Link}
            to="/"
            className="ms-lg-auto fw-normal fm-archivo"
            onClick={() => state ? burgerToggle() : null}
          >Shop</Nav.Link>
          <Nav.Link as={Link}
            to="/"
            className=" fw-normal fm-archivo"
            onClick={() => state ? burgerToggle() : null}
          >About Us</Nav.Link>
          <Nav.Link as={Link}
            to="/"
            className="fw-normal account fm-archivo me-1"
            onClick={() => state ? burgerToggle() : null}
          ><span></span>Account</Nav.Link>
          <Nav.Link as={Link}
            to="/"
            className="d-lg-none fw-normal mt-3 mt-lg-0 fm-archivo"
            onClick={() => state ? burgerToggle() : null}
          >FAQ</Nav.Link>
          <Nav.Link as={Link}
            to="/"
            className="d-lg-none fw-normal mb-4 mb-lg-0 fm-archivo"
            onClick={() => state ? burgerToggle() : null}
          >Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <nav className='d-flex order-2 gap-1'>
        <Button
          as={Link}
          to="/cart"
          className="px-0 px-lg-1 order-2 order-lg-1 bg-transparent fw-normal  border-0 text-black cart me-2 me-md-0 me-lg-0"
        >
          <span></span>
          <sup
            className='px-1 rounded-3 text-white text-black fm-archivo-semibold bg-gray d-lg-none'>{totalItems}</sup>
          <a className='d-none d-lg-inline'>({totalItems})</a>
        </Button>
        <Button
          as={Link}
          className="px-0 px-lg-1  order-1 order-lg-2  border-0 text-black search bg-transparent"
        >
          <span></span>
        </Button>
      </nav>
    </Navbar>
  );
};

export default Header;
