const express = require('express');
const router  = express.Router();

const faqs = [
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

// GET /api/faq
router.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.json({
    success: true,
    data: faqs,
  });
});

module.exports = router;
