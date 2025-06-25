import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// npm run dev
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import TicketCards from './components/TicketCards';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

import ThemePark from './components/ThemePark';
import WaterPark from './components/WaterPark';
import Tickets from './components/Tickets';
import SnowWorld from './components/SnowWorld';
import QuickLinks from './components/QuickLinks';
import Contact from './components/Contact';

import Parade from './components/Parade';
import WavePool from './components/WavePool';
import RainDance from './components/RainDance';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Cards />
            <Gallery />
            <TicketCards />
          </>
        } />
        <Route path="/theme" element={<ThemePark />} />
        <Route path="/water" element={<WaterPark />} />
        <Route path="/parade" element={<Parade />} />
        <Route path="/wavepool" element={<WavePool />} />
        <Route path="/raindance" element={<RainDance />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/snow" element={<SnowWorld />} />
        <Route path="/quick" element={<QuickLinks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;