import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/heroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section text-start p-0 pt-1">
       <Container>
        <Row className="align-items-top">
          <Col md={6} className="text-left p-0 pt-3">
            <h1 className="display-1 text-neutral-600 fw-normal p-0 m-0 text-start">See the NFT new world</h1>
            <p className="lead mt-4 text-neutral-400 fw-semibold text-start fs-6" >Vorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Etiam eu turpis molestie, di.</p>
            <Button className="px-0 mt-2 bg-transparent border-0 fw-semibold text-neutral-600">
              Discover now <span className="ms-3 border span border-neutral-600">&rarr;</span>
            </Button>
          </Col>
          <Col md={6} 
          className="text-center text-md-end mt-sm-5 mt-md-3 mt-lg-0 pt-lg-4 pe-0"
          >
            <div className="hero-images h-100 p-lg-4 pb-lg-0 pe-lg-0">
              <img 
              loading="lazy" 
              width="100%" 
              height="100%" 
              src="src/assets/heroImg.svg" 
              alt="NFT Example 1" 
              className="img-fluid" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
