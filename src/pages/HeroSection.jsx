import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/heroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section position-relative text-center text-md-start p-0 bg-secondary">
       <Container className='bg-warning p-0 '>
        <Row className="align-items-top bg-danger">
          <Col md={8} className="text-left bg-info p-0 z-N1">
            <h1 className="d-flex display-1 text-neutral-600 fw-normal p-0 m-0 bg-primary  w-100 text-start lh-1">See the NFT new world</h1>
            <p className="lead mt-5 text-neutral-400 fw-semibold fs-6 text-start">Vorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Etiam eu turpis molestie, di.</p>
            <Button className="ps-0 mt-4 bg-transparent border-0 fw-semibold text-neutral-600">
              Discover Vow <span className="ms-2 border span border-neutral-600">&rarr;</span>
            </Button>
          </Col>
          <Col md={6} 
          className=" position-absolute text-center text-md-end bg-success z-0 end-0 pt-lg-4"
          >
            <div className="hero-images h-100 bg-primary">
              <img loading="lazy" width="100%" height="100%" src="src/assets/heroImg.svg" alt="NFT Example 1" className="img-fluid" />
              {/* <img src="src/assets/gorilla.jpg" alt="NFT Example 2" className="img-fluid mt-4 mt-md-0 ms-md-4" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
