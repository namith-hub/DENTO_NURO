import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { GiTooth, GiBrain } from 'react-icons/gi';
import ClinicLogo from '../UI/ClinicLogo';
import './Footer.css';

const quickLinks   = ['Home','About','Doctors','Dental Services','Neurosurgery','Facilities','Gallery','Testimonials','FAQ','Contact','Book Appointment'];
const dentalSrvcs  = ['Laser Dentistry', 'Aesthetic Dentistry', 'Dental Implants', 'Smile Designing', 'Root Canal Therapy', 'Pediatric Dentistry'];
const neuroSrvcs   = ['Neurosurgery Consultations', 'Brain Disorders', 'Spine Disorders', 'Minimal Invasive Spine Surgeries', 'Post-Op Care', 'Surgical Planning'];

const scrollTo = (id) => {
  const map = {
    'Home': 'home', 'About': 'about', 'Doctors': 'doctors',
    'Dental Services': 'dental', 'Neurosurgery': 'neurosurgery',
    'Facilities': 'facilities', 'Gallery': 'gallery',
    'Testimonials': 'testimonials', 'FAQ': 'faq',
    'Contact': 'contact', 'Book Appointment': 'appointment',
  };
  const el = document.getElementById(map[id] || id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-top container">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo-wrap">
          <ClinicLogo className="footer-logo" alt="Dr Ahalya's Dento neuro clinic" />
          <div className="footer-logo-text">
            <span className="footer-logo-name">DR AHALYA'S</span>
            <span className="footer-logo-sub">DENTO NEURO CLINIC</span>
          </div>
        </div>
        <p className="footer-tagline">Advanced Dental Care | Expert Neuroscience</p>
        <p className="footer-desc">
          Mysuru's modern multispecialty healthcare destination — providing ethical, patient-centered dental and neurosurgical care.
        </p>
        <div className="footer-socials">
          <a href="#!" aria-label="Instagram"><FiInstagram /></a>
          <a href="#!" aria-label="Facebook"><FiFacebook /></a>
          <a href="#!" aria-label="Twitter"><FiTwitter /></a>
          <a href="#!" aria-label="YouTube"><FiYoutube /></a>
        </div>
        <div className="footer-contact-quick">
          <a href="tel:+916360521761"><FiPhone size={14} /> +91 63605 21761</a>
          <a href="mailto:smilewise.dentoneuro@gmail.com"><FiMail size={14} /> smilewise.dentoneuro@gmail.com</a>
          <span><FiMapPin size={14} /> Opp. Brahmasthana Kalyan Mantapa, Saraswathipuram, Mysuru</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-col">
        <h5>Quick Links</h5>
        <ul>
          {quickLinks.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
        </ul>
      </div>

      {/* Dental */}
      <div className="footer-col">
        <h5><GiTooth size={14} /> Dental Services</h5>
        <ul>
          {dentalSrvcs.map(s => <li key={s}><button onClick={() => scrollTo('dental')}>{s}</button></li>)}
        </ul>
        <h5 style={{ marginTop: '1.5rem' }}><GiBrain size={14} /> Neurosurgery</h5>
        <ul>
          {neuroSrvcs.map(s => <li key={s}><button onClick={() => scrollTo('neurosurgery')}>{s}</button></li>)}
        </ul>
      </div>

      {/* Hours */}
      <div className="footer-col">
        <h5>Clinic Timings</h5>
        <div className="footer-hours">
          {[
            ['Mon – Sat (Morning)', '10:00 AM – 2:00 PM'],
            ['Mon – Sat (Evening)', '4:00 PM – 8:00 PM'],
            ['Sunday',              'Holiday'],
            ['Appointments',        '+91 6360521761'],
          ].map(([day, time]) => (
            <div key={day} className="footer-hour-row">
              <span>{day}</span>
              <span className={`ft${time === 'Holiday' ? ' closed' : time === '+91 6360521761' ? ' emerg' : ''}`}>{time}</span>
            </div>
          ))}
        </div>
        <div className="footer-cert">
          <div className="cert-badge">✓ KMC Registered</div>
          <div className="cert-badge">✓ IDA Member (44345 A)</div>
          <div className="cert-badge">✓ PGIMER Trained</div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>© {new Date().getFullYear()} DR AHALYA'S DENTO NEURO CLINIC. All Rights Reserved.</p>
        <p>Designed with ♥ for excellent healthcare in Mysuru</p>
      </div>
    </div>
  </footer>
);

export default Footer;
