import React, { useEffect, useRef } from 'react';
import '../../style/featuredCollection.css';
import { motion } from 'framer-motion';
import { Parallax, Background } from 'react-parallax';
import FadeInSection from '../../components/FadeInSection';
import { Container, Row, Col, Button } from 'react-bootstrap';


const FeaturedCollection = () => {

  return (
    <FadeInSection
      id="profile"
      className="text-black text-center my-5 px-lg-5"
    >
      <Container className="featured-collection px-lg-4">
        <h2 className="text-center text-black fm-Chillax-Semibold mb-2">OUR COLLECTION</h2>
        <p className="text-center text-dark-gray fm-archivo-Medium mb-5">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
        <Row>
          <Col md={6} lg={4}>
            <div className="collection-item rounded-5 backdrop">
              <img
                loading='lazy'
                src="src/assets/tech.jpg"
                alt="Modern Style"
                className="img-fluid"
              />
              <Button variant="light" className="learn-more-btn fm-archivo-semibold rounded-5">
                LEARN MORE <span></span>
              </Button>
            </div>
          </Col>
          <Col md={6} lg={8} className='px-md-1 mt-4 mt-lg-0'>
            <div className="collection-item rounded-5">
            <Parallax
          bgImage="src/assets/abraham.jpg"
          strength={300}
          bgImageAlt="Classic Men"
          className="img-fluid classic bg-black"
        >
          <div style={{ height: '446px' }}></div>
        </Parallax>
              <div className="overlay-text">
                <h3 className='fm-Chillax-Bold'>CLASSIC MEN</h3>
                <p className='fm-archivo'>We're changing the way things get made</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </FadeInSection>
  );
};

export default FeaturedCollection;
