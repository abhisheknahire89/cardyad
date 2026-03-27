import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoIsThisFor from './components/WhoIsThisFor';
import TheProblem from './components/TheProblem';
import HowItWorks from './components/HowItWorks';
import CareTriangle from './components/CareTriangle';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import ForHospitals from './components/ForHospitals';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhoIsThisFor />
      <TheProblem />
      <HowItWorks />
      <CareTriangle />
      <Features />
      <SocialProof />
      <ForHospitals />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
