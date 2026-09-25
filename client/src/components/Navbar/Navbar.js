import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import ClinicLogo from '../UI/ClinicLogo';
import './Navbar.css';

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'doctors',      label: 'Doctors' },
  { id: 'dental',       label: 'Dental' },
  { id: 'neurosurgery', label: 'Neurosurgery' },
  { id: 'facilities',   label: 'Facilities' },
  { id: 'gallery',      label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'contact',      label: 'Contact' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (location.pathname === '/') {
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const el = document.getElementById(navLinks[i].id);
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActive(navLinks[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isSolid = scrolled || location.pathname !== '/';

  return (
    <header className={`navbar${isSolid ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <button className="navbar-logo" onClick={() => scrollTo('home')} aria-label="Go to top">
          <ClinicLogo className="logo-img" alt="Dr Ahalya's Dento Neuro Clinic Logo" />
          <div className="logo-text">
            <span className="logo-name">DR AHALYA'S</span>
            <span className="logo-sub">DENTO NEURO CLINIC</span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`nav-link${active === link.id && location.pathname === '/' ? ' active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar-cta">
          <a href="tel:+916360521761" className="navbar-call">
            <FiPhone size={15} />
            <span>Call Now</span>
          </a>
          <button className="btn-primary ripple" onClick={() => scrollTo('appointment')}>
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className={`mobile-link${active === link.id && location.pathname === '/' ? ' active' : ''}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn-primary mobile-book" onClick={() => scrollTo('appointment')}>
          <span>Book Appointment</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
