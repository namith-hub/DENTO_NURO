import React from 'react';
import {
  FiMonitor, FiUsers, FiPackage, FiSmile,
  FiDollarSign, FiHeart, FiThumbsUp
} from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <FiMonitor size={32}/>,
    title: 'Advanced Technology',
    desc: 'Digital X-rays, 3D imaging, laser dentistry, and cutting-edge surgical instruments — we invest in the best tools for the best outcomes.',
    stat: '15+ Technologies',
  },
  {
    icon: <FiUsers size={32}/>,
    title: 'Experienced Doctors',
    desc: 'Our specialists bring 12–15 years of clinical experience each, with training from premier medical institutions across India.',
    stat: '27 Combined Yrs',
  },
  {
    icon: <FiPackage size={32}/>,
    title: 'Modern Equipment',
    desc: 'State-of-the-art dental chairs, advanced neurosurgical instruments, and premium-grade sterilization systems for your safety.',
    stat: '100% Sterile',
  },
  {
    icon: <FiSmile size={32}/>,
    title: 'Minimal Pain Treatment',
    desc: 'We use gentle anesthesia protocols, laser techniques, and precision tools to ensure virtually pain-free procedures.',
    stat: '98% Comfort Score',
  },
  {
    icon: <FiDollarSign size={32}/>,
    title: 'Affordable Care',
    desc: 'World-class treatment at transparent, fair, and ethical pricing with no hidden costs.',
    stat: 'Transparent Pricing',
  },
  {
    icon: <FiHeart size={32}/>,
    title: 'Compassionate Staff',
    desc: 'From reception to recovery, every team member is trained to make you feel heard, comfortable, and cared for.',
    stat: '5★ Patient Reviews',
  },
  {
    icon: <FiThumbsUp size={32}/>,
    title: 'Patient Satisfaction',
    desc: 'Over 98% of our patients would recommend us to family and friends — a testament to our commitment to excellence.',
    stat: '98% Satisfaction',
  },
];

const WhyChooseUs = () => (
  <section id="why" className="why section-padding bg-brown">
    <div className="container">
      <div className="section-center" data-aos="fade-up">
        <span className="section-tag why-tag"><GiMedicalDrip size={14} /> Why Choose Us</span>
        <h2 className="section-title why-title">Why Patients Choose<br /><span className="text-gold">Dr Ahalya's Dento Nuro Clinic</span></h2>
        <div className="gold-divider center"></div>
        <p className="section-subtitle why-sub">
          At Dr. Ahalya’s Dento Neuro Centre, we bring dental and neurosurgical care together under one roof, with a focus on expertise, comfort, and personalised treatment.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div
            className="why-card glass-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={`${(i % 4) * 80}`}
          >
            <div className="why-card-icon">{r.icon}</div>
            <div className="why-card-stat">{r.stat}</div>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
