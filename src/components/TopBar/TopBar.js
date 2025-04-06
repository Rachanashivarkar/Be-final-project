import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopBar.css';
import CartSection from "./../../components/CartSection/CartSection";

const TopBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <CartSection />
      <nav className="menu">

        <Link className='menu-item'
          to="/essentials"
          style={isActive('/essentials') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          ESSENTIALS
        </Link>

        <Link className='menu-item'
          to="/babyproducts"
          style={isActive('/baby products') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          Baby Products
        </Link>

        <Link className='menu-item'
          to="/personalcare"
          style={isActive('/PersonalCare') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          Personal Care
        </Link>

        <Link className='menu-item'
          to="/health"
          style={isActive('/health') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          Health And Nutrition
        </Link>

        <Link className='menu-item'
          to="/meds"
          style={isActive('/meds') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          Medicines
        </Link>

      </nav>
    </>
  );
};

export default TopBar;
