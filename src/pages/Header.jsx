import {React, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';
import headerListData from '../data/headerListData';
import HeaderListItem from '../components/HeaderListItem';
import personalLogo from '../assets/Personal-Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [headerList, setHeaderList] = useState(headerListData);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === '/contact-me') {
      setHeaderList([
        {
          _id: 1,
          link: '/',
          name: 'Home',
          active: true,
        },
        {
          _id: 2,
          link: '/contact-me',
          name: 'Contact Me',
          active: false,
        },
      ]);
    } else {
      setHeaderList(headerListData);
    }
  }, [location.pathname]);
  
  const handleNavOnClick = id => {
    const newHeaderList = headerList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setHeaderList(newHeaderList);
  };

  const handleBurgerMenuClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsMenuOpen((prevState) => !prevState);

    console.log("Burger menu is clicked, current state:", !isMenuOpen);
  }

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
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
        <a href="#" className="logo"><img src={personalLogo} alt="Personal Logo" /></a>
        <a href="#" className="header-name">Avril Donovan Gonzales</a>
        <div className="burger-menu" onClick={handleBurgerMenuClick}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {
            headerList.map(nav => (
              <HeaderListItem 
              key={nav._id}
              nav={nav}
              navOnClick={handleNavOnClick}
              />
            ))
          }
        </ul>
    </header>
  )
}
export default Header