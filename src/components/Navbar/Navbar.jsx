/**
 * Navbar Component
 * A responsive navigation bar with smooth scrolling to sections
 * Features hamburger menu for mobile devices
 */
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track scroll position for navbar styling
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links configuration
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#interests', label: 'Interests' },
    { href: '#contact', label: 'Contact' }
  ];

  // Handle scroll event to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo / Brand */}
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="navbar__logo-text">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__item">
              <a 
                href={link.href} 
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
