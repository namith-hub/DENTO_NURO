import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const phone = '916360521761';
  const msg   = encodeURIComponent('Hello! I would like to book an appointment at DR AHALYAS Dento neuro clinic.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="whatsapp-label">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppFloat;
