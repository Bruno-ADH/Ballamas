import React from 'react';
import HeroSection from './MainPages/HeroSection';
import CollectionsSection from './MainPages/CollectionsSection';
import CreateAndSellSection from './MainPages/CreateAndSellSection';
import ProfileSection from './MainPages/ProfileSection';
import Footer from './MainPages/Footer';

const Home = () => {
    return (<>
        {/* <Header /> */}
      <HeroSection />
      <CollectionsSection />
      <CreateAndSellSection />
      <ProfileSection />
      <Footer />
    </>)
}

export default Home;