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

  useEffect(() => {
    if (location.pathname === '/contact-me') {
      setHeaderList([
        {
          _id: 1,
          link: '/#/',
          name: 'Home',
          active: true,
        },
        {
          _id: 2,
          link: '/#/contact-me',
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

  return (
    <header>
      <a href="/#/" className="logo"><img src={personalLogo} alt="Personal Logo" /></a>
      <a href="/#/" className="header-name">Avril Donovan Gonzales</a>
      <ul className="nav">
        {
          headerListData.map(nav => (
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