import React, { useEffect, useRef } from 'react';
import '../style/profileSection.css';
import { motion, useScroll, useTransform} from 'framer-motion';

const ProfileSection = () => {
  const imgBgRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  // const { scrollYProgress } = useScroll({
  //   target: imgBgRef,
  //   offset: ["start end", "end start"]
  // });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (imgBgRef.current) {
  //       const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //       imgBgRef.current.style.transform = `translateY(${-scrollTop * 0.2}px)`; // Ajuste la vitesse de défilement de l'image
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <section id="profile" className="py-5 bg-transparent text-white text-center">
      <div ref={sectionRef} className="card border-0 profile-section rounded-5 bg-transparent">
        <div
          ref={imgBgRef}
          className="bg-neutral-800 profile-background rounded-5"
        ></div>
        <div className="card-img-overlay profile-content">
          <h1 class="card-title fw-medium display-3">Build your NFT profile</h1>
          <p class="card-text fw-semibold">Join almost 10k NFT profiles on Digit!</p>
          <button className="btn btn-outline-light py-2 px-4 fw-semibold">Sign up now</button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
