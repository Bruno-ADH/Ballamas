import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../style/heroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {

  return (
    <section id="home" className="hero-section text-start p-0 pt-1 mt-5 rounded-5">        
  
       <Container className="text-center text-white align-self-center position-relative top-50 translate-middle-y z-3 d-flex flex-column align-items-center justify-content-center gap-4">
        <div className='title'>
          <span></span>
        <p className="fm-archivo">We bring new fashion to the world</p>
        <span></span>
        </div>
        <h2 className="fm-Chillax-Bold display-5 text-white  mb-0">DISCOVER THE LATEST FASHION TRENDS HERE</h2>
        <p className=" fm-archivo fs-6 text-center px-3 desc my-0">Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>
        <Button variant="" className="rounded-pill fm-archivo-semibold text-black d-flex align-items-center arrow mt-2">
          <span>Start shopping</span><span></span>
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;

{/* <Parallax
  bgImage="src/assets/hero.jpg"
  strength={300}
  bgImageAlt="Hero"
  className="img-fluid img-tool bg-transparent"
>
  <div style={{ height: '76dvh', backgroundPosition: "center" }}></div>
</Parallax>  */}