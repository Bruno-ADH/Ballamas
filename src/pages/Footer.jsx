import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../style/footer.css';

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="footer py-2 mt-5"
  >
    <Container className="justify-content-center">
      <Row className="justify-content-start w-100">
      <Col xs={12} md={12} className="text-start text-md-start px-0 py-2">
      <img src="src/assets/icons/logo.svg" className="img-fluid m-0" alt="Logo" style={{ width: '36px', height: '36px' }} />
        </Col>
      </Row>  
      <Row className="justify-content-between align-items-center py-3 row-gap-2 border-0 border-top border-neutral-100">
        <Col xs={12} md={6} className="text-start text-md-start px-0">
          <p className="h5 mb-0 text-neutral-600 fw-semibold">Create Explore & Collect Digital NFTs</p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end px-0">
          <ul className="list-unstyled d-flex mb-0 fw-medium">
          {['Privacy', 'Terms & Conditions', 'About Us'].map((text, index) => (
                <motion.li
                  key={index}
                  className="mx-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href={`#${text.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`} className="link-neutral-900">
                    {text}
                  </a>
                </motion.li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
    </motion.footer>
  );
};

export default Footer;
