import React, { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiCalendar, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import './Appointment.css';

const departments = ['Dental', 'Neurosurgery', 'Cosmetic Dentistry', 'Emergency'];
const doctors     = ['Dr. Ahalya N (Dental Surgeon)', 'Dr. Puneeth S (MCh PGIMER)', 'Any Available Doctor'];
const timeSlots   = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

const initForm = { name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' };

const Appointment = () => {
  const [form,     setForm]     = useState(initForm);
  const [errors,   setErrors]   = useState({});
  const [success,  setSuccess]  = useState(false);
  const [loading,  setLoading]  = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())      e.name       = 'Full name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit number';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.department)       e.department = 'Please select a department';
    if (!form.doctor)           e.doctor     = 'Please select a doctor';
    if (!form.date)             e.date       = 'Please select a date';
    if (!form.time)             e.time       = 'Please select a time';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    // Simulate API call
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    setSuccess(true);
    setForm(initForm);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="appointment section-padding bg-beige">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiMedicalDrip size={14} /> Book Now</span>
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Schedule a consultation with our dental or neurosurgery specialists. Easy, fast, and fully online.
          </p>
        </div>

        <div className="appt-layout" data-aos="fade-up" data-aos-delay="100">
          {/* Info Sidebar */}
          <div className="appt-info">
            <h3>Appointment Information</h3>
            <ul className="appt-info-list">
              {[
                { icon: <FiPhone />, label: 'Phone / WhatsApp', val: '+91 63605 21761', href: 'https://wa.me/916360521761?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SMILEWISE%20Dento%20Neuro%20Clinic.' },
                { icon: <FiMail />,  label: 'Email',            val: 'smilewise.dentoneuro@gmail.com', href: 'mailto:smilewise.dentoneuro@gmail.com' },
                { icon: <FiCalendar/>,label:'Hours',            val: 'Mon–Sat: 10AM–2PM & 4PM–8PM' },
              ].map((item, i) => (
                <li key={i}>
                  <span className="appt-info-icon">{item.icon}</span>
                  <div>
                    <strong>{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
                        <span>{item.val}</span>
                      </a>
                    ) : (
                      <span>{item.val}</span>
                    )}
                  </div>
                </li>
              ))}

            </ul>
            <div className="appt-img">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=80"
                alt="Modern clinic reception"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form className="appt-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group${errors.name ? ' error' : ''}`}>
                <label htmlFor="appt-name"><FiUser size={14} /> Full Name</label>
                <input id="appt-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className={`form-group${errors.phone ? ' error' : ''}`}>
                <label htmlFor="appt-phone"><FiPhone size={14} /> Phone Number</label>
                <input id="appt-phone" name="phone" type="tel" placeholder="10-digit mobile" value={form.phone} onChange={handleChange} />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            <div className={`form-group${errors.email ? ' error' : ''}`}>
              <label htmlFor="appt-email"><FiMail size={14} /> Email Address</label>
              <input id="appt-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className={`form-group${errors.department ? ' error' : ''}`}>
                <label htmlFor="appt-dept"><FiCalendar size={14} /> Department</label>
                <select id="appt-dept" name="department" value={form.department} onChange={handleChange}>
                  <option value="">Select Department</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                {errors.department && <span className="form-error">{errors.department}</span>}
              </div>
              <div className={`form-group${errors.doctor ? ' error' : ''}`}>
                <label htmlFor="appt-doc">Preferred Doctor</label>
                <select id="appt-doc" name="doctor" value={form.doctor} onChange={handleChange}>
                  <option value="">Select Doctor</option>
                  {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                {errors.doctor && <span className="form-error">{errors.doctor}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group${errors.date ? ' error' : ''}`}>
                <label htmlFor="appt-date"><FiCalendar size={14} /> Preferred Date</label>
                <input id="appt-date" name="date" type="date" min={today} value={form.date} onChange={handleChange} />
                {errors.date && <span className="form-error">{errors.date}</span>}
              </div>
              <div className={`form-group${errors.time ? ' error' : ''}`}>
                <label htmlFor="appt-time">Preferred Time</label>
                <select id="appt-time" name="time" value={form.time} onChange={handleChange}>
                  <option value="">Select Time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.time && <span className="form-error">{errors.time}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appt-msg"><FiMessageSquare size={14} /> Message (Optional)</label>
              <textarea id="appt-msg" name="message" rows={4} placeholder="Describe your concern or symptoms..." value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn-primary appt-submit ripple" disabled={loading}>
              <span>{loading ? 'Booking...' : 'Confirm Appointment'}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="appt-success-overlay" onClick={() => setSuccess(false)}>
          <div className="appt-success-box" onClick={e => e.stopPropagation()}>
            <div className="success-icon"><FiCheck size={36} /></div>
            <h3>Appointment Requested!</h3>
            <p>Thank you for choosing SMILEWISE Dento Neuro Clinic. Our team will contact you within 2 hours to confirm your appointment slot.</p>
            <button className="btn-primary" onClick={() => setSuccess(false)}><span>Close</span></button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Appointment;
