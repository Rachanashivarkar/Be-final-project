import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import './service.css';
import TopBar from './../../components/TopBar/TopBar';

import Essentials from './../../view/essentials/Essentials';
import Vegetables from '../babyproducts/babyproducts';
import Fruits from '../personalcare/PersonalCare';
import Exotics from '../health/Health';
import Dairy from '../meds/Meds';


import Slider from '../../components/servicesSlider/Slider';
import ServiceCards from './../../components/serviceCards/ServiceCards';
import MedicalShops from '../../components/medicalShops/MedicalShops';

const Services = () => {
  
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const path = location.pathname.split('/')[2];
    return path || 'Service';
  });

  const renderPage = () => {
    switch (selectedCategory) {
      case 'essentials':
        return <Essentials />;

      case 'vegetables':
        return <Vegetables />;

      case 'fruits':
        return <Fruits />;

      case 'exotics':
        return <Exotics />;

      case 'dairy':
        return <Dairy />;

      default:
        return (
          <>
            <Slider />
            <ServiceCards />
            <MedicalShops />
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <TopBar setSelectedCategory={setSelectedCategory} />
        <div className="cards-container">
          
          {renderPage()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;


