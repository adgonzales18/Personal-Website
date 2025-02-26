import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import TechnologyStack from './pages/TechnologyStack';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Contact from './pages/Contact';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY); 
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<><Banner /><TechnologyStack /><Portfolio /><Footer /></>} />
        
        <Route path="/contact-me" element={<><Contact /><Footer /></>} />
      </Routes>

      <BackToTopBtn scroll={scroll} />
    </Router>
  );
}

export default App
