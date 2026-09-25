import React, { useState } from 'react';
import { FiAward, FiStar, FiCheckCircle, FiRefreshCw } from 'react-icons/fi';
import { GiTooth, GiBrain } from 'react-icons/gi';
import './Doctors.css';

const doctors = [
  {
    id: 1,
    name:           'Dr. Ahalya N',
    title:          'Dental Surgeon & Aesthetic Specialist',
    specialty:      'Aesthetic Dentistry | Laser Dentistry',
    icon:           <GiTooth size={22} />,
    experience:     '6+ Years',
    qualification:  'BDS (RGUHS)',
    regNo:          'Reg. No. 44345 A',
    college:        'Rajiv Gandhi University of Health Sciences',
    image:          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80',
    bio:            'Dr. Ahalya N is a dedicated dental surgeon specializing in aesthetic and laser dentistry with over 6 years of clinical excellence. She holds advanced clinical training in laser dentistry, endodontics, and smile designing.',
    expertise:      ['Aesthetic Dentistry', 'Laser Dentistry', 'Smile Designing', 'Advanced Endodontics', 'Teeth Whitening', 'Cosmetic Restorations'],
    awards:         ['Member - Indian Dental Association (IDA)', 'Reg. No. 44345 A', 'Advanced Laser Dentistry Specialist'],
  },
  {
    id: 2,
    name:           'Dr. Puneeth S (MCh PGIMER)',
    title:          'Consultant Neurosurgeon',
    specialty:      'Neurosurgery (Brain & Spine)',
    icon:           <GiBrain size={22} />,
    experience:     '10+ Years',
    qualification:  'MBBS, MS, MCh (Neurosurgery)',
    regNo:          'Reg. No. KMC 106238',
    college:        'PGIMER, Chandigarh',
    image:          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80',
    bio:            'Dr. Puneeth S (MCh PGIMER) is an expert consultant neurosurgeon with over 10 years of experience in managing complex brain and spine disorders, including minimal invasive spine surgeries. He completed his advanced neurosurgical training at the prestigious PGIMER, Chandigarh.',
    expertise:      ['Neurosurgery', 'Brain Tumor & Trauma Care', 'Spine Surgery & Decompression', 'Minimal Invasive Spine Surgeries', 'Neurosurgical Consultation', 'Post-Operative Care'],
    awards:         ['PGIMER Chandigarh Alumni', 'Reg. No. KMC 106238', 'Consultant Neurosurgeon'],
  },
];

const DoctorCard = ({ doc }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`doctor-card${flipped ? ' flipped' : ''}`}
      data-aos="fade-up"
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFlip()}
    >
      <div className="doctor-card-inner">
        {/* Front */}
        <div className="doctor-front">
          <div className="doctor-img-wrap">
            <img src={doc.image} alt={doc.name} loading="lazy" />
            <div className="doctor-specialty-badge">
              {doc.icon}
              <span>{doc.specialty}</span>
            </div>
            <div className="doctor-tap-hint">
              <FiRefreshCw size={12} />
              <span>Tap for Bio</span>
            </div>
          </div>
          <div className="doctor-info">
            <h3>{doc.name}</h3>
            <p className="doctor-title">{doc.title}</p>
            <div className="doctor-qual">
              <FiAward size={14} />
              <span>{doc.qualification}</span>
            </div>
            <p className="doctor-college">{doc.college}</p>
            <div className="doctor-meta">
              <div className="doctor-meta-item">
                <span className="meta-num">{doc.experience}</span>
                <span className="meta-label">Experience</span>
              </div>
              <div className="doctor-divider-v"></div>
              <div className="doctor-meta-item reg-item">
                <span className="meta-num">{doc.regNo}</span>
                <span className="meta-label">Registration</span>
              </div>
              <div className="doctor-divider-v"></div>
              <div className="doctor-meta-item">
                <div className="doctor-stars">
                  {[1,2,3,4,5].map(s => <FiStar key={s} size={12} fill="var(--gold)" color="var(--gold)" />)}
                </div>
                <span className="meta-label">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back — hover reveal / tap reveal */}
        <div className="doctor-back">
          <div className="doctor-back-header">
            <img src={doc.image} alt={doc.name} className="doctor-back-img" />
            <div>
              <h4>{doc.name}</h4>
              <p>{doc.title}</p>
            </div>
          </div>
          <p className="doctor-bio">{doc.bio}</p>
          <h5 className="expertise-title">Areas of Expertise</h5>
          <ul className="expertise-list">
            {doc.expertise.map((e, i) => (
              <li key={i}>
                <span className="feature-dot"></span>
                {e}
              </li>
            ))}
          </ul>
          <div className="doctor-awards">
            {doc.awards.map((a, i) => (
              <div key={i} className="award-tag">
                <FiCheckCircle size={12} /> {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const Doctors = () => (
  <section id="doctors" className="doctors section-padding bg-ivory">
    <div className="container">
      <div className="section-center" data-aos="fade-up">
        <span className="section-tag"><FiStar size={13} /> Our Specialists</span>
        <h2 className="section-title">Meet Our Doctors</h2>
        <div className="gold-divider center"></div>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Dedicated specialists bringing expertise, ethical care, and clinical excellence to Dr Ahalya's Dento neuro clinic.
        </p>
      </div>

      <div className="doctors-grid">
        {doctors.map(doc => <DoctorCard key={doc.id} doc={doc} />)}
      </div>
    </div>
  </section>
);

export default Doctors;
