import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/fonts.css';
import './style/style.css';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import CollectionsSection from './pages/CollectionsSection';
import CreateAndSellSection from './pages/CreateAndSellSection';
import ProfileSection from './pages/ProfileSection';
import Footer from './pages/Footer';

function App() {

  return (
    <div className='container pt-2'>
      <Header />
      <HeroSection />
      <CollectionsSection />
      <CreateAndSellSection />
      <ProfileSection />
      <Footer />
    </div>
  );
}

export default App
