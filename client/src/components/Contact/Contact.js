import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GiMedicalDrip } from 'react-icons/gi';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact section-padding bg-ivory">
    <div className="container">
      <div className="section-center" data-aos="fade-up">
        <span className="section-tag"><GiMedicalDrip size={14} /> Contact Us</span>
        <h2 className="section-title">Find Us in Mysuru</h2>
        <div className="gold-divider center"></div>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Conveniently located at Sahukar Chennaiah Road, Saraswathipuram, Mysuru — opposite Brahmasthana Kalyan Mantapa.
        </p>
      </div>

      <div className="contact-layout">
        {/* Info Cards */}
        <div className="contact-info" data-aos="fade-right">
          <div className="contact-card">
            <div className="contact-card-icon"><FiMapPin size={22} /></div>
            <div>
              <h4>Our Address</h4>
              <p>165/1, Sahukar Chennaiah Road,<br />Opposite Brahmasthana Kalyan Mantapa,<br />Saraswathipuram, Mysuru, Karnataka – 570009</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon"><FiPhone size={22} /></div>
            <div>
              <h4>Phone & WhatsApp</h4>
              <a href="tel:+916360521761" className="contact-link">+91 63605 21761</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon"><FiMail size={22} /></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:smilewise.dentoneuro@gmail.com" className="contact-link">smilewise.dentoneuro@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon"><FiClock size={22} /></div>
            <div>
              <h4>Clinic Timings</h4>
              <div className="hours-list">
                <div className="hours-row"><span>Mon – Sat (Morning)</span><span className="hours-time">10:00 AM – 2:00 PM</span></div>
                <div className="hours-row"><span>Mon – Sat (Evening)</span><span className="hours-time">4:00 PM – 8:00 PM</span></div>
                <div className="hours-row"><span>Sunday</span><span className="hours-time closed">Holiday</span></div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/916360521761?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DR%20AHALYAS%20Dento%20neuro%20clinic."
            target="_blank"
            rel="noreferrer"
            className="whatsapp-cta"
          >
            <FaWhatsapp size={22} />
            <span>Chat on WhatsApp (+91 63605 21761)</span>
          </a>
        </div>

        {/* Map */}
        <div className="contact-map" data-aos="fade-left">
          <div className="map-wrapper">
            <iframe
              title="DR AHALYAS Dento neuro clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6897538820175!2d76.6436!3d12.3156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b5931b07489%3A0x3c25fbff3d1d9da1!2sSaraswathipuram%2C%20Mysuru%2C%20Karnataka%20570009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-badge">
            <FiMapPin size={16} />
            <span>Saraswathipuram, Mysuru - 570009</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
