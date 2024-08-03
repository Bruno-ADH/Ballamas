import React from 'react';
// import './ProfileSection.css';
import '../style/profileSection.css';

const ProfileSection = () => {
  return (
    <section id="profile" className="py-5 bg-dark text-white text-center">
      <div className="container">
        <h2>Build your NFT Profile</h2>
        <p className="lead">Start creating and showcasing your digital assets.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </section>
  );
};

export default ProfileSection;
