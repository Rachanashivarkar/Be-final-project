import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/nav/logo2.png';
import calling from './../../images/footer/calling.png';
import location from './../../images/footer/location.png';
import email from './../../images/footer/email.png';
import insta from './../../images/footer/instagram.png';
import twitter from './../../images/footer/twitter.png';

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: insta,
      alt: 'Instagram',
      href: 'https://www.instagram.com'
    },
    {
      icon: twitter,
      alt: 'Twitter',
      href: 'https://x.com'
    },
    {
      icon: email,
      alt: 'Gmail',
      href: 'pachu.242004@gmail.com'
    }
  ];

  const contactInfo = [
    
    {
      icon: calling,
      alt: '+91 8104065238',
      href: 'tel:+918104065238'
    },
    {
      icon: email,
      alt: 'Gmail',
      href: 'pachu.242004@gmail.com'
    }
  ];

  const footerRoutes = [
    { path: '/about', name: 'About us' },
    { path: '/services', name: 'Services' },
    { path: '/feedback', name: 'Feedback' }
  ];

  const services = [
    { name: 'Essentials', href: '/essentials' },
    { name: 'Baby Products', href: '/babyproducts' },
    { name: 'health & nutrition', href: '/health' },
    { name: 'Personal care', href: '/personalcare' },
    { name: 'Medicines', href: '/meds' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-Agro">
          <span className="footer-heading">
            <img className="footer-logo" src={logo} alt="Agromart Logo" />
          </span>
          <p className="footer-para">
          Get the right medicine, right when you need it—MediFind brings fast, reliable, and hassle-free medicine delivery straight to your door.
          </p>
        </div>

        
        <div className="footer-services">
          <span className="footer-heading">Our Services</span>
          <ul className="footer-li-container">
            {services.map((service, index) => (
              <li key={index} className="footer-li">
                <Link to={service.href} className="footer-link">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="footer-links">
          <span className="footer-heading">Useful Links</span>
          <ul className="footer-li-container">
            {footerRoutes.map((item, index) => (
              <li key={index} className="footer-li">
                <Link to={item.path} className="footer-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="footer-contact">
          <span className="footer-heading">Contact Us</span>
          <ul className="footer-contact-list">
            {contactInfo.map((info) => (
              <li key={info.alt} className="footer-contact-item">
                <img src={info.icon} className="footer-img1" alt={info.alt} />
                <a className="footer-li" href={info.href}>
                  {info.alt}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="footer-follow">
          <span className="footer-heading">Follow Us</span>
          <div className="footer-social-links">
            {socialMediaLinks.map((link) => (
              <a key={link.alt} href={link.href} className="footer-anchor">
                <img src={link.icon} className="footer-img" alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2025 All rights reserved MediFind
        </p>
        <div className="footer-social-links">
          {socialMediaLinks.map((link) => (
            <a key={link.alt} href={link.href} className="footer-anchor">
              <img src={link.icon} className="footer-img" alt={link.alt} />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
