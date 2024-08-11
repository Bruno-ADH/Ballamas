import React from 'react';
import HeroSection from './MainPages/HeroSection';
import CollectionsSection from './MainPages/CollectionsSection';
import CreateAndSellSection from './MainPages/CreateAndSellSection';
import ProfileSection from './MainPages/ProfileSection';

const Home = () => {
    return (<>
      <HeroSection />
      <CollectionsSection />
      <CreateAndSellSection />
      <ProfileSection />
    </>)
}

export default Home;