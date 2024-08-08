import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/heroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <section id="home" className="hero-section text-start p-0 pt-1">
      <Container>
        <Row className="align-items-top">
          <Col md={6} className="text-left p-0 pt-3">
            <motion.h1
              className="display-1 text-neutral-600 fw-normal p-0 m-0 text-start"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >See the NFT new world
            </motion.h1>
            <motion.p
              className="lead mt-4 text-neutral-400 fw-semibold text-start fs-6"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >Vorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Etiam eu turpis molestie, di.
            </motion.p>
            <motion.button
             className="px-0 mt-3 bg-transparent border-0 fw-semibold text-neutral-600"
             variants={buttonVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
             >
              Discover now <span className="ms-3 border span border-neutral-600">&rarr;</span>
            </motion.button>
          </Col>
          <Col md={6}
            className="text-center text-md-end mt-sm-5 mt-md-3 mt-lg-0 pt-lg-4 pe-0"
          >
            <motion.div 
            className="hero-images h-100 p-lg-4 pb-lg-0 pe-lg-0"
            variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                loading="lazy"
                width="100%"
                height="100%"
                src="src/assets/heroImg.svg"
                alt="NFT Example 1"
                className="img-fluid"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
