import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer py-2 mt-5">
    <Container className="justify-content-center">
      <Row className="justify-content-start w-100">
      <Col xs={12} md={12} className="text-start text-md-start px-0 py-2">
      <img src="src/assets/icons/logo.svg" className="img-fluid m-0" alt="Logo" style={{ width: '36px', height: '36px' }} />
        </Col>
      </Row>  
      {/* <Row className="justify-content-center bg-secondary divider-row">
        <hr className="divider w-100" />
      </Row> */}
      <Row className="justify-content-between align-items-center py-3 row-gap-2 border-0 border-top border-neutral-100">
        <Col xs={12} md={6} className="text-start text-md-start px-0">
          <p className="h5 mb-0 text-neutral-600 fw-semibold">Create Explore & Collect Digital NFTs</p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end px-0">
          <ul className="list-unstyled d-flex mb-0 fw-medium">
            <li className="mx-2 "><a href="#privacy" className="link-neutral-900">Privacy</a></li>
            <li className="mx-2"><a href="#terms" className="link-neutral-900">Terms & Conditions</a></li>
            <li className="mx-2"><a href="#about" className="link-neutral-900">About Us</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
