import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../style/header.css';
import { motion } from 'framer-motion';
import { useToggle } from '../../hooks/useToggle';

const Header = () => {
  const [state, toggle] = useToggle(false)

  const burgerToggle = () => {
    toggle()
    const brand = document.querySelector('.ntf')
    if (brand.className.includes('hidden')) {
      brand.classList.remove('hidden')
    } else {
      brand.classList.add('hidden')
    }
  }

  return (
    <Navbar bg="white" expand="lg" sticky='top' expanded={state}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-3'
      >
        <Navbar.Brand href="#home" className="ms-0 ntf"
        >
          <img src="src/assets/icons/logo.svg" className="img-fluid" alt="Logo" style={{ width: 'auto', height: 'auto' }} />
        </Navbar.Brand>
      </motion.div>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={burgerToggle}
        className="btn-neutral-50 burger p-2 rounded-3"
      >
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto fw-semibold">
          {['Home', 'Top Sales', 'Collections', 'Our Blog', 'About Us'].map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Nav.Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => state ? burgerToggle() : null}>
                {link}
              </Nav.Link>
            </motion.div>
          ))}
        </Nav>
        <Nav className="ml-auto fw-semibold d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-md-evenly">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Nav.Link href="#profile" className="px-4 me-4" onClick={() => state ? toggle() : null}>Sign Up</Nav.Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="outline-dark" className=" btn-neutral-800 rounded-5 connect px-4" onClick={() => state ? toggle() : null}>Connect Wallet</Button>
            </motion.div>
          </div>
        </Nav>
      </Navbar.Collapse>
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
