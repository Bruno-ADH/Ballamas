import React, { useEffect, useRef } from 'react';
import '../../style/profileSection.css';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import FadeInSection from '../../components/FadeInSection';


const ProfileSection = () => {

  return (
    <FadeInSection
      id="profile"
      className="py-5 text-white text-center"
    >
      <div className="card border-0 profile-section rounded-5 bg-transparent">
        <Parallax
          bgImage="src/assets/nftProfile.jpg"
          strength={300}
          className="bg-neutral-800 profile-background rounded-5"
        >
          <div style={{ height: '336px' }}></div>
        </Parallax>
        <div
          className="card-img-overlay profile-content"
        >
          <h1
            className="card-title fw-medium display-3"
          >Build your NFT profile</h1>
          <p
            className="card-text fw-semibold"
          >Join almost 10k NFT profiles on Digit!</p>
          <button
            className="btn btn-outline-light py-2 px-4 fw-semibold"
          >Sign up now</button>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ProfileSection;
