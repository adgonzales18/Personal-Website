import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import AboutMe from './pages/AboutMeTemp';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Contact from './pages/Contact';

function App() {
  
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<><Banner /><AboutMe/><Portfolio /><Footer /></>} />
        
        <Route path="/contact-me" element={<><Contact /><Footer /></>} />
      </Routes>

      <BackToTopBtn scroll={scroll} />
    </Router>
  );
}

export default App
