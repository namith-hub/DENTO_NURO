import React from 'react';
import { GiTooth, GiBrain } from 'react-icons/gi';
import ClinicLogo from './ClinicLogo';
import './Loader.css';

const Loader = () => {
  return (
    <div className="page-loader">
      {/* Background Animated Glows */}
      <div className="loader-bg-anim" aria-hidden="true">
        <div className="loader-glow-orb orb-tooth"></div>
        <div className="loader-glow-orb orb-brain"></div>
      </div>

      {/* Central Animated Emblem with Tooth & Brain Orbit */}
      <div className="loader-animation-container">
        {/* Outer Orbit Ring with Tooth & Brain */}
        <div className="loader-orbit-ring">
          <div className="orbit-node tooth-node">
            <GiTooth size={26} className="orbit-icon tooth-icon" />
          </div>
          <div className="orbit-node brain-node">
            <GiBrain size={28} className="orbit-icon brain-icon" />
          </div>
        </div>

        {/* Counter Orbit Ring */}
        <div className="loader-orbit-ring-reverse">
          <div className="orbit-node tooth-node-sub">
            <GiTooth size={18} className="orbit-icon tooth-icon" />
          </div>
          <div className="orbit-node brain-node-sub">
            <GiBrain size={20} className="orbit-icon brain-icon" />
          </div>
        </div>

        {/* Center Official Clinic Emblem */}
        <div className="loader-logo-frame">
          <ClinicLogo className="loader-logo" alt="Dr Ahalya's Dento Neuro Clinic" />
        </div>
      </div>

      {/* Dual Care Badges */}
      <div className="loader-care-badges">
        <span className="care-badge dental-badge">
          <GiTooth size={14} /> Advanced Dentistry
        </span>
        <span className="badge-sep">•</span>
        <span className="care-badge neuro-badge">
          <GiBrain size={14} /> Expert Neurosurgery
        </span>
      </div>

      {/* Brand Title & Tagline */}
      <h1 className="loader-text">DR AHALYA'S DENTO NEURO CLINIC</h1>
      <p className="loader-tagline">Smile Brighter. Think Better.</p>

      {/* Progress Bar */}
      <div className="loader-bar">
        <div className="loader-bar-fill"></div>
      </div>
    </div>
  );
};

export default Loader;
