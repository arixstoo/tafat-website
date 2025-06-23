// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <img src="/logo.png" alt="TAFAT ELECTRIQUE Logo" className="footer-logo-image" />
          </div>
          <div className="navbar-title">
            <h1>TAFAT ELECTRIQUE</h1>
          </div>
        </div>
        
        <nav className="navbar-nav">
          <ul className="navbar-menu">
            <li><a href="#hero-page" className="navbar-link" >Accueil</a></li>
            <li><a href="#apropos" className="navbar-link">À Propos</a></li>
            <li><a href="#services" className="navbar-link">Services</a></li>
            <li><a href="#realisations" className="navbar-link">Réalisations</a></li>
            <li><a href="#partenaires" className="navbar-link">Partenaires</a></li>
            <li><a href="#footer" className="navbar-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;