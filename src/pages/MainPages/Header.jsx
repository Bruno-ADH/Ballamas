import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../style/header.css';
import { motion } from 'framer-motion';
import { useToggle } from '../../hooks/useToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [state, toggle] = useToggle(false)

  return (
    <Navbar variant="border-0 border-bottom py-3 border-light-gray fm-archivo fw-normal" bg="white" expand="lg" sticky='top' expanded={state}>
      <Navbar.Toggle
        aria-controls="modern-navbar-nav"
        onClick={toggle}
        className="burger p-2 rounded-3"
      >
      </Navbar.Toggle>
        <Navbar.Brand  as={Link} to="/" className="ntf"
        >
          <img src="src/assets/icons/logo.svg" className="img-fluid" alt="Logo" style={{ width: 'auto', height: 'auto' }} />
        </Navbar.Brand>
       
      <Navbar.Collapse id="modern-navbar-nav" className='order-3 order-lg-0 mt-4 mt-lg-0'>
        <Nav className="fw-semibold w-100 text-center">
          {['Men', 'Women', 'Kids', 'Collection'].map((link, index) => (
              <Nav.Link as={Link} 
              // to={`${link.toLowerCase().replace(/ /g, '-')}`} 
              to="/"
              onClick={() => state ? toggle() : null}
              className='fw-normal'
              >
                {link}
              </Nav.Link>
          ))}
           <Nav.Link as={Link} 
          //  to="/shop" 
          to="/"
           className="ms-lg-auto fw-normal" onClick={() => state ? toggle() : null}>Shop</Nav.Link>
           <Nav.Link as={Link} 
          //  to="/about-us" 
          to="/"
           className=" fw-normal" onClick={() => state ? toggle() : null}>About Us</Nav.Link>
           <Nav.Link as={Link} 
          //  to="/account" 
          to="/"
           className="fw-normal account" onClick={() => state ? toggle() : null}><span></span>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <nav className='d-flex order-2'>
      <Button as={Link} to="/contact"  className="px-2 order-2 order-lg-1 fw-normal bg-transparent border-0 text-black cart" onClick={() => state ? toggle() : null}><span></span><sup className='px-1 rounded-3 text-white text-black fw-semibold bg-gray'>0</sup></Button>
      <Button as={Link}  className="px-1 order-1 order-lg-2 bg-transparent border-0 text-black search" onClick={() => state ? toggle() : null}><span></span></Button>
      </nav>
    </Navbar>
  );
};

// <Navbar bg="white" expand="lg" sticky='top' expanded={state}>
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className='my-3'
//       >
//         <Navbar.Brand href="#home" className="ms-0 ntf"
//         >
//           <img src="src/assets/icons/logo.svg" className="img-fluid" alt="Logo" style={{ width: 'auto', height: 'auto' }} />
//         </Navbar.Brand>
//       </motion.div>
//       <Navbar.Toggle
//         aria-controls="basic-navbar-nav"
//         onClick={burgerToggle}
//         className="btn-neutral-50 burger p-2 rounded-3"
//       >
//       </Navbar.Toggle>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mx-auto fw-semibold">
//           {['Home', 'Top Sales', 'Collections', 'Our Blog', 'About Us'].map((link, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//             >
//               <Nav.Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => state ? burgerToggle() : null}>
//                 {link}
//               </Nav.Link>
//             </motion.div>
//           ))}
//         </Nav>
//         <Nav className="ml-auto fw-semibold d-flex align-items-center">
//           <div className="d-flex align-items-center justify-content-md-evenly">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <Nav.Link href="#profile" className="px-4 me-4" onClick={() => state ? toggle() : null}>Sign Up</Nav.Link>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <Button variant="outline-dark" className=" btn-neutral-800 rounded-5 connect px-4" onClick={() => state ? toggle() : null}>Connect Wallet</Button>
//             </motion.div>
//           </div>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>

export default Header;
