import React, { useState } from 'react';
import logoImg from '../../assets/logo.png';

const ClinicLogo = ({ className = 'logo-img', alt = "Dr Ahalya's Dento Neuro Clinic Logo" }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1f1b16 0%, #0f0e0c 100%)',
          border: '1.5px solid #c8a25a',
          padding: '4px'
        }}
      >
        <circle cx="50" cy="50" r="46" stroke="#c8a25a" strokeWidth="2" fill="none" />
        {/* Tooth half */}
        <path
          d="M38 28C32 28 28 34 28 42C28 54 34 68 38 72C40 74 43 72 43 68C43 60 44 48 44 40C44 32 42 28 38 28Z"
          fill="url(#goldGrad)"
        />
        {/* Brain half */}
        <path
          d="M58 28C64 28 72 32 72 40C72 46 68 50 70 56C72 60 70 66 66 68C62 70 58 66 56 64V28H58Z"
          fill="url(#goldGrad)"
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5c178" />
            <stop offset="50%" stopColor="#c8a25a" />
            <stop offset="100%" stopColor="#9a7635" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <img
      src={logoImg}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default ClinicLogo;
