import React from 'react';
import HeroSection from './MainPages/HeroSection';
import CollectionsSection from './MainPages/CollectionsSection';
import FeaturedCollection from './MainPages/FeaturedCollection';

const Home = () => {
    return (<>
      <HeroSection />
      <CollectionsSection />
      <FeaturedCollection />
    </>)
}

export default Home;