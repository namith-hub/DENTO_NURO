import React from 'react';
import {
  FiMonitor, FiShield, FiCoffee,
  FiTruck, FiNavigation
} from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import './Facilities.css';

const facilities = [
  {
    icon: <FiMonitor size={34}/>,
    title: 'Digital X-Ray',
    desc: 'High-resolution digital radiography with up to 80% less radiation than conventional X-rays for safer, clearer diagnostics.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80',
  },
  {
    icon: <FiCoffee size={34}/>,
    title: 'Modern Dental Chairs',
    desc: 'Ergonomically designed, premium dental units with massage function and patient entertainment systems for total comfort.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
  },
  {
    icon: <FiShield size={34}/>,
    title: 'Sterilization',
    desc: 'Hospital-grade autoclave sterilization of all instruments, ensuring 100% infection control and patient safety at all times.',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&q=80',
  },
  {
    icon: <FiCoffee size={34}/>,
    title: 'Luxury Waiting Lounge',
    desc: 'Serene, spacious waiting area with comfortable seating, complimentary beverages, ambient music, and free Wi-Fi.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80',
  },
  {
    icon: <FiTruck size={34}/>,
    title: 'Ample Parking',
    desc: 'Dedicated parking space available for patients and their families — ensuring a stress-free visit from arrival to departure.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
  },
  {
    icon: <FiNavigation size={34}/>,
    title: 'Wheelchair Access',
    desc: 'Fully accessible clinic with ramps, wide corridors, and adapted facilities ensuring every patient can access care comfortably.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80',
  },
];

const Facilities = () => (
  <section id="facilities" className="facilities section-padding bg-beige">
    <div className="container">
      <div className="section-center" data-aos="fade-up">
        <span className="section-tag"><GiMedicalDrip size={14} /> Our Facilities</span>
        <h2 className="section-title">Premium Clinic Facilities</h2>
        <div className="gold-divider center"></div>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Every aspect of our clinic is designed for your comfort, safety, and convenience — from state-of-the-art equipment to a calming, luxurious environment.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((f, i) => (
          <div
            className="facility-card premium-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={`${(i % 4) * 80}`}
          >
            <div className="facility-img">
              <img src={f.image} alt={f.title} loading="lazy" />
              <div className="facility-overlay"></div>
              <div className="facility-icon-wrap">{f.icon}</div>
            </div>
            <div className="facility-body">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Facilities;
