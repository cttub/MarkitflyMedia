import React, { useState } from 'react';
import hamburger from '../Assets/Hamburger.svg';
import closeIcon from '../Assets/x.svg';
import Fade from 'react-reveal/Fade';
import './Style/nav.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = () => {
    document.querySelector("html").scrollTo(0, 0);
    closeMenu(); // Close the menu when a navigation link is clicked
  };

  return (
    <div className="mobile-nav">
      {!isOpen ? (
        <div className="hamburger" onClick={toggleMenu}>
          <img width="36px" src={hamburger} alt="Open Menu" />
        </div>
      ) : (
        <div></div>
      )}

      {isOpen && (
        <Fade down>
          <div className="menu mobile">
            <a href="#" onClick={handleNavLinkClick}>
              Home
            </a>
            <a href="#tools-anchor" onClick={handleNavLinkClick}>
              Services
            </a>
            <a href="#testimonials-anchor" onClick={handleNavLinkClick}>
              Testimonials
            </a>
            <a href="#work-anchor" onClick={handleNavLinkClick}>
              Recent Work
            </a>
            <a href="#pricing-anchor" onClick={handleNavLinkClick}>
              Pricing
            </a>
            <a href="#faq-anchor" onClick={handleNavLinkClick}>
              FAQ
            </a>
            <a href="#" onClick={handleNavLinkClick}>
              Free Consultation
            </a>
            <div className="close-button" onClick={closeMenu}>
              <img width="40px" src={closeIcon} alt="Close Menu" />
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default MobileNav;
