import React, { useEffect, useRef, useState } from 'react';
import { FiTarget, FiEye, FiHeart, FiSmile, FiAward, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { GiMedicalDrip, GiHeartOrgan } from 'react-icons/gi';
import './About.css';

const counters = [
  { end: 5000, suffix: '+', label: 'Happy Patients', Icon: FiSmile },
  { end: 10,   suffix: '+', label: 'Years Experience', Icon: FiAward },
  { end: 15,   suffix: '+', label: 'Advanced Tech & Lasers', Icon: FiCpu },
  { end: 9800, suffix: '+', label: 'Successful Treatments', Icon: FiCheckCircle },
];

const useCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const CounterCard = ({ end, suffix, label, Icon, start }) => {
  const count = useCounter(end, 2000, start);
  return (
    <div className="counter-card">
      <div className="counter-icon">
        <Icon size={26} />
      </div>
      <span className="counter-num">{count.toLocaleString()}{suffix}</span>
      <span className="counter-label">{label}</span>
    </div>
  );
};

const About = () => {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section-padding bg-beige" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiHeartOrgan size={14} /> About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Dr Ahalya's Dento neuro clinic is a modern multispecialty healthcare destination in Mysuru, combining advanced dental expertise with expert neurosurgical care under one compassionate roof.
          </p>
        </div>

        {/* Counter Row */}
        <div className="about-counters grid-4" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          {counters.map((c, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <CounterCard {...c} start={started} />
            </div>
          ))}
        </div>

        {/* Cards Row */}
        <div className="about-grid">
          {/* Mission */}
          <div className="about-card" data-aos="fade-right">
            <div className="about-card-icon">
              <FiTarget size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide ethical, patient-centered dental and neurosurgical care with clinical excellence and compassionate service.
            </p>
          </div>

          {/* Vision */}
          <div className="about-card" data-aos="fade-up">
            <div className="about-card-icon">
              <FiEye size={28} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted destination for advanced dental and neurosurgical care known for innovation, safety, and patient satisfaction.
            </p>
          </div>

          {/* Values */}
          <div className="about-card" data-aos="fade-left">
            <div className="about-card-icon">
              <FiHeart size={28} />
            </div>
            <h3>Patient-Centered Care</h3>
            <p>
              Every diagnosis, treatment plan, and follow-up is designed around the individual to ensure safety, comfort, and optimal long-term health outcomes.
            </p>
          </div>
        </div>

        {/* Why Choose Us Preview */}
        <div className="about-why" data-aos="fade-up">
          <div className="about-why-text">
            <span className="section-tag"><GiMedicalDrip size={14} /> Why Choose Us</span>
            <h2 className="section-title" style={{ maxWidth: '500px' }}>
              Where Excellence Meets Compassion
            </h2>
            <p>
              At Dr. Ahalya’s Dento Neuro Centre, we bring dental and neurosurgical care together under one roof, with a focus on expertise, comfort, and personalised treatment.
            </p>
            <ul className="about-features">
              {[
                'Dental & Neurosurgical Care Under One Roof',
                'Advanced Clinical Tech & Laser Dentistry',
                'Experienced Specialists',
                'Ethical & Patient-Centered Treatment Plans',
                'Convenient Timings: Mon–Sat (10am- 2pm) , (4pm-8pm)',
              ].map((f, i) => (
                <li key={i}>
                  <span className="feature-dot"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-why-image" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
              alt="Dr Ahalya's Dento neuro clinic interior"
              loading="lazy"
            />
            <div className="about-badge">
              <span className="badge-num">10+</span>
              <span className="badge-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
