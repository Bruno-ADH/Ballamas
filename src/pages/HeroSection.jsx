import React from 'react';
// import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-md-left py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">See the NFT new world</h1>
            <p className="lead">Explore and collect digital NFTs.</p>
          </div>
          <div className="col-md-6">
            <img src="src/assets/gorilla.jpg" className="img-fluid" alt="Main visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
