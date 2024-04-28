import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link'; 
import "./NavBar.css";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app_nav">
      <div className="nav-container">
        <HashLink smooth to='/#' className="nav-link">
          <h1 className="nav-logo">Elisaul Batista</h1>
        </HashLink>
        <div className="nav-links">
          <HashLink smooth to="/#about-section" className="nav-link">
            <h2>About Me</h2>
          </HashLink>
          <HashLink smooth to="/#projects-section" className="nav-link">
            <h2>My Works</h2>
          </HashLink>
          <HashLink smooth to="/#contact-section" className="nav-link">
            <h2>Contact Me</h2>
          </HashLink>
        </div>
        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <HashLink smooth to="/#about-section" className="nav-link" onClick={toggleMobileMenu}>
            <h2>About Me</h2>
          </HashLink>
          <HashLink smooth to="/#projects-section" className="nav-link" onClick={toggleMobileMenu}>
            <h2>My Works</h2>
          </HashLink>
          <HashLink smooth to="/#contact-section" className="nav-link" onClick={toggleMobileMenu}>
            <h2>Contact Me</h2>
          </HashLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
