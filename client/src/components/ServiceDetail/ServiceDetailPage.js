import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiCalendar, FiPhone, FiClock, FiShield, FiAward, FiArrowRight } from 'react-icons/fi';
import { GiTooth, GiBrain } from 'react-icons/gi';
import { getAllServices } from '../../data/servicesData';
import Appointment from '../Appointment/Appointment';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const allServices = getAllServices();
  const service = allServices.find(s => s.id === slug) || allServices[0];

  const isDental = service.category === 'Dental Care';
  const relatedServices = allServices
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="service-detail-page">
      {/* Top Banner / Breadcrumb Nav */}
      <div className="service-nav-bar">
        <div className="container service-nav-inner">
          <button className="back-btn" onClick={() => navigate(-1 || '/')}>
            <FiArrowLeft size={18} />
            <span>Back to Services</span>
          </button>
          <div className="service-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>{service.category}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="service-hero">
        {/* Animated Background Orbs & Particles */}
        <div className="service-hero-bg-anim" aria-hidden="true">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
          <div className="anim-particles">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="service-particle" style={{
                left: `${(i * 7.5 + 3) % 100}%`,
                animationDelay: `${(i % 5) * 1.1}s`,
                animationDuration: `${5 + (i % 4) * 2}s`
              }} />
            ))}
          </div>
        </div>

        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <span className="service-badge">
              {isDental ? <GiTooth size={15} /> : <GiBrain size={15} />}
              {service.category}
            </span>
            <h1 className="service-title">{service.title}</h1>
            <p className="service-lead">{service.description}</p>
            <p className="service-long">{service.longDescription}</p>

            <div className="service-hero-actions">
              <button
                className="btn-primary ripple"
                onClick={() => {
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span><FiCalendar size={16} /> Book This Service</span>
              </button>
              <a href="tel:+919999999999" className="btn-outline">
                <FiPhone size={16} /> Immediate Consultation
              </a>
            </div>

            <div className="service-meta-strip">
              <div className="meta-strip-item">
                <FiClock className="meta-icon" />
                <div>
                  <strong>Duration</strong>
                  <span>30 - 60 Mins</span>
                </div>
              </div>
              <div className="meta-strip-item">
                <FiShield className="meta-icon" />
                <div>
                  <strong>Care Standards</strong>
                  <span>ISO 9001:2015</span>
                </div>
              </div>
              <div className="meta-strip-item">
                <FiAward className="meta-icon" />
                <div>
                  <strong>Specialist</strong>
                  <span>Expert Consultation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-hero-media">
            <div className="media-frame">
              <img src={service.image} alt={service.title} />
              <div className="media-overlay"></div>
              <div className="media-badge">
                <span>DR AHALYA'S DENTO NEURO CLINIC</span>
                <small>Mysuru Center of Excellence</small>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Key Highlights Grid */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="service-highlights-section section-padding bg-ivory">
          <div className="container">
            <div className="section-center">
              <span className="section-tag">Key Features</span>
              <h2 className="section-title">Why Choose Us For {service.title}</h2>
              <div className="gold-divider center"></div>
            </div>
            <div className="highlights-grid">
              {service.highlights.map((h, i) => (
                <div key={i} className="highlight-card">
                  <div className="highlight-num">0{i+1}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Offer / Scope of Treatments */}
      <section className="service-points-section section-padding bg-beige">
        <div className="container">
          <div className="points-wrapper">
            <div className="points-header">
              <span className="section-tag">Scope of Care</span>
              <h2 className="section-title">What We Offer</h2>
              <p>Our complete range of procedures & treatment protocols included in this service:</p>
            </div>
            <div className="points-grid">
              {service.points.map((pt, i) => (
                <div key={i} className="point-item">
                  <div className="point-check">
                    <FiCheck size={16} />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Journey Workflow */}
      {service.procedureSteps && service.procedureSteps.length > 0 && (
        <section className="service-steps-section section-padding bg-ivory">
          <div className="container">
            <div className="section-center">
              <span className="section-tag">Treatment Journey</span>
              <h2 className="section-title">What to Expect During Your Visit</h2>
              <div className="gold-divider center"></div>
            </div>
            <div className="steps-grid">
              {service.procedureSteps.map((st, i) => (
                <div key={i} className="step-card">
                  <span className="step-number">{st.step}</span>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Booking Section */}
      <div id="appointment" className="service-booking-wrapper">
        <Appointment preselectedService={service.title} />
      </div>

      {/* Related Services */}
      <section className="related-services-section section-padding bg-beige">
        <div className="container">
          <div className="section-center">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Other {service.category} Services</h2>
            <div className="gold-divider center"></div>
          </div>
          <div className="related-grid">
            {relatedServices.map(rel => (
              <div
                key={rel.id}
                className="related-card"
                onClick={() => navigate(`/services/${rel.id}`)}
              >
                <img src={rel.image} alt={rel.title} />
                <div className="related-body">
                  <h4>{rel.title}</h4>
                  <p>{rel.short}</p>
                  <span className="related-link">
                    View Page <FiArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
