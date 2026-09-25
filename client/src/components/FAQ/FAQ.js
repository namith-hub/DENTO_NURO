import React, { useState, useEffect, useCallback, memo } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import './FAQ.css';

// Pre-cached local dataset for instant zero-latency load
const INITIAL_FAQS = [
  {
    id: 1,
    q: 'What types of dental services does Dr Ahalya\'s Dento Neuro Clinic offer?',
    a: 'We offer a comprehensive range of 15+ dental services including General, Preventive, Restorative, Cosmetic, and Emergency Dentistry, Dental Implants, Orthodontics, Laser Dentistry, Pediatric Dentistry, and Full Mouth Rehabilitation — all under one roof.',
  },
  {
    id: 2,
    q: 'Do you offer neurosurgery consultations at the clinic?',
    a: 'Yes! Our senior neurosurgeon, Dr. Puneeth S (MCh PGIMER), offers expert consultations for brain disorders, spine conditions, and minimal invasive spine surgeries. He also provides MRI/CT scan reviews, neurosurgical planning, and comprehensive post-operative care.',
  },
  {
    id: 3,
    q: 'How do I book an appointment?',
    a: 'You can book through our website\'s appointment form, by calling us directly, or via WhatsApp. Our clinic timings are Monday to Saturday: 10:00 AM – 2:00 PM and 4:00 PM – 8:00 PM.',
  },
  {
    id: 4,
    q: 'Is dental treatment painful?',
    a: 'Modern dentistry is virtually pain-free. We use premium local anesthesia and sedation options, advanced laser techniques, and gentle precision instruments to ensure maximum comfort throughout every procedure.',
  },
  {
    id: 5,
    q: 'Do you accept health insurance?',
    a: 'Yes. Our billing team assists with insurance claims, pre-authorization documentation, and cashless treatment facilitation with most major insurance providers.',
  },
  {
    id: 6,
    q: 'How long does a dental implant procedure take?',
    a: 'The implant placement typically takes 1–2 hours per implant. The complete process — from placement to final crown — usually takes 3–6 months, allowing the implant to integrate with the jawbone naturally.',
  },
  {
    id: 7,
    q: 'What should I bring to my first appointment?',
    a: 'Please bring any recent dental or medical records, previous X-rays or MRI/CT scans, a list of current medications, and your insurance card if applicable. Arriving 10 minutes early helps us serve you better.',
  },
  {
    id: 8,
    q: 'Is the clinic child-friendly?',
    a: 'Absolutely. We have a dedicated pediatric dentistry program with a specially trained team and a child-friendly environment designed to make young patients feel safe, comfortable, and even excited about dental care.',
  },
  {
    id: 9,
    q: 'What safety and sterilization protocols do you follow?',
    a: 'We adhere to the highest standards of infection control. All instruments are autoclave-sterilized, single-use items are disposed after each patient, treatment rooms are disinfected between appointments, and staff wear full PPE.',
  },
  {
    id: 10,
    q: 'Do you offer emergency dental care?',
    a: 'Yes. We provide emergency dental consultations for severe toothaches, broken teeth, dental trauma, lost crowns/fillings, and dental abscesses. Contact us immediately and we will prioritize your care.',
  },
];

// Memoized FAQItem component to prevent re-rendering unaffected accordion items
const FAQItem = memo(({ faq, index, isOpen, onToggle }) => {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span>{faq.q}</span>
        <span className="faq-icon">
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          className="faq-answer"
          role="region"
          aria-labelledby={`faq-question-${index}`}
        >
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  );
});


FAQItem.displayName = 'FAQItem';

const FAQ = () => {
  // Pre-load static FAQ data in local state for instant availability
  const [faqs, setFaqs] = useState(INITIAL_FAQS);
  const [open, setOpen] = useState(0);

  // Background fetch once on page load to sync/cache data if backend is available
  useEffect(() => {
    let isMounted = true;
    const cacheKey = 'dento_neuro_faq_cache';
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        if (parsed && parsed.length > 0) {
          setFaqs(parsed);
        }
      } catch (e) {
        // Fallback silently to initial dataset
      }
    }

    // Fetch once in background without blocking initial instant UI
    fetch('http://localhost:5000/api/faq')
      .then((res) => (res.ok ? res.json() : null))
      .then((resData) => {
        if (isMounted && resData && resData.success && resData.data) {
          setFaqs(resData.data);
          localStorage.setItem(cacheKey, JSON.stringify(resData.data));
        }
      })
      .catch(() => {
        // Keep using pre-cached local dataset silently if server is unreachable
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Instant toggle handler wrapped in useCallback
  const handleToggle = useCallback((index) => {
    setOpen((prevOpen) => (prevOpen === index ? -1 : index));
  }, []);

  return (
    <section id="faq" className="faq section-padding bg-brown">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag faq-tag"><GiMedicalDrip size={14} /> FAQ</span>
          <h2 className="section-title faq-title">Frequently Asked<br /><span className="text-gold">Questions</span></h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle faq-sub">
            Everything you need to know before your first visit — answered clearly and honestly.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.id || i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);
