import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../../style/heroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {

  return (
    <section id="home" className="hero-section text-start p-0 pt-1 mt-5 rounded-5">

      <Container className="text-center text-white align-self-center position-relative top-50 translate-middle-y z-3 d-flex flex-column align-items-center justify-content-center gap-4">
        <motion.div
          className='title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span></span>
          <p className="fm-archivo">We bring new fashion to the world</p>
          <span></span>
        </motion.div>
        <motion.h2
          className="fm-Chillax-Bold display-5 text-white  mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >DISCOVER THE LATEST FASHION TRENDS HERE</motion.h2>
        <motion.p
          className=" fm-archivo fs-6 text-center px-3 desc my-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button variant="" className="rounded-pill fm-archivo-semibold text-black d-flex align-items-center arrow mt-2">
            <span>Start shopping</span><span></span>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;