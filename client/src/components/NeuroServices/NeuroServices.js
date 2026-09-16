import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiActivity } from 'react-icons/fi';
import { GiBrain, GiSpinalCoil } from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';
import './NeuroServices.css';

const categories = [
  {
    id: 'brain-disorders',
    title: 'Brain Disorders',
    icon: <TbBrain size={22}/>,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    services: [
      { name: 'Headache Evaluation', desc: 'Comprehensive assessment of chronic, cluster, and migraine headaches to identify root causes and provide targeted treatment.' },
      { name: 'Brain Tumor Consultation', desc: 'Expert evaluation and management planning for intracranial tumors, with access to advanced neuroimaging and surgical planning.' },
      { name: 'Stroke Evaluation', desc: 'Urgent and elective stroke assessments, risk factor management, and secondary prevention strategies.' },
      { name: 'Head Injury Assessment', desc: 'Thorough evaluation of traumatic brain injuries, concussions, and post-traumatic complications.' },
      { name: 'Hydrocephalus Evaluation', desc: 'Diagnosis and management of abnormal CSF accumulation in the brain, including surgical planning.' },
      { name: 'Brain Infection Assessment', desc: 'Expert workup of meningitis, encephalitis, brain abscess, and other neurological infections.' },
    ],
  },
  {
    id: 'spine-disorders',
    title: 'Spine Disorders',
    icon: <GiSpinalCoil size={22}/>,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    services: [
      { name: 'Neck & Back Pain', desc: 'Detailed evaluation of cervical and lumbar pain with individualized conservative and surgical management options.' },
      { name: 'Slip Disc (PIVD)', desc: 'Expert care for prolapsed intervertebral discs causing nerve compression and pain, with minimally invasive surgical options.' },
      { name: 'Sciatica', desc: 'Targeted diagnosis and treatment of sciatic nerve compression causing radiating leg pain, numbness, and weakness.' },
      { name: 'Cervical Spondylosis', desc: 'Management of age-related cervical spine degeneration causing neck pain, stiffness, and neurological symptoms.' },
      { name: 'Lumbar Spondylosis', desc: 'Comprehensive care for lower spine degeneration, including pain management and decompression surgery when needed.' },
      { name: 'Spinal Canal Stenosis', desc: 'Surgical and non-surgical management of narrowed spinal canal causing cord or nerve compression.' },
      { name: 'Spine Trauma', desc: 'Emergency and elective surgical management of vertebral fractures, dislocations, and spinal cord injuries.' },
      { name: 'Spinal Tumor', desc: 'Oncological neurosurgical consultation for primary and metastatic spinal tumors, with biopsy and resection expertise.' },
    ],
  },
  {
    id: 'minimal-invasive-spine',
    title: 'Minimal Invasive Spine Surgeries',
    icon: <GiSpinalCoil size={22}/>,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    services: [
      { name: 'Microdiscectomy', desc: 'Precision keyhole surgery to remove herniated disc fragments pressing on spinal nerves with minimal tissue disruption.' },
      { name: 'Endoscopic Spine Surgery', desc: 'Ultra-minimally invasive spine surgery using high-definition endoscopes for rapid recovery and minimal pain.' },
      { name: 'Minimally Invasive Decompression', desc: 'Targeted tubular decompression for lumbar canal stenosis relieving chronic leg pain and neurogenic claudication.' },
      { name: 'MIS-TLIF Fusion', desc: 'Minimally invasive spinal fusion and stabilization through tiny incisions for spondylolisthesis and instability.' },
      { name: 'Percutaneous Screw Fixation', desc: 'Keyhole stabilization using fluoroscopy-guided screw placement without wide surgical incisions.' },
      { name: 'Cervical Micro-Foraminotomy', desc: 'Microscopic nerve root decompression in the neck relieving severe radiating arm pain and numbness.' },
    ],
  },
  {
    id: 'diagnostic-review',
    title: 'Diagnostic Review',
    icon: <MdOutlineScience size={22}/>,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    services: [
      { name: 'MRI Interpretation', desc: 'Expert reading and second-opinion review of brain and spine MRI scans by our senior neurosurgeon.' },
      { name: 'CT Scan Review', desc: 'Detailed interpretation of CT imaging for neurological conditions, trauma assessment, and surgical planning.' },
      { name: 'Neurosurgical Planning', desc: 'Pre-operative planning consultations using advanced neuroimaging for optimal surgical approach determination.' },
    ],
  },
  {
    id: 'postop-care',
    title: 'Post Operative Care',
    icon: <FiActivity size={22}/>,
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    services: [
      { name: 'Wound Assessment', desc: 'Careful monitoring and management of surgical incisions for optimal healing and prevention of complications.' },
      { name: 'Suture Removal', desc: 'Gentle, precise suture and staple removal by our experienced nursing team in a sterile environment.' },
      { name: 'Recovery Monitoring', desc: 'Scheduled follow-up appointments to monitor neurological recovery and adjust care plans as needed.' },
      { name: 'Rehabilitation Guidance', desc: 'Expert guidance on physiotherapy, occupational therapy, and speech therapy for post-surgical recovery.' },
      { name: 'Long Term Follow Up', desc: 'Ongoing specialist surveillance for patients with complex neurological conditions requiring continued monitoring.' },
    ],
  },
];

const NeuroServices = () => {
  const [activeTab, setActiveTab] = useState('brain-disorders');
  const navigate = useNavigate();
  const active = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="neurosurgery" className="neuro section-padding bg-ivory">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiBrain size={14} /> Neurosurgery</span>
          <h2 className="section-title">Brain & Spine Consultation</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Expert neurosurgical consultations for brain and spine disorders, including minimal invasive spine surgeries — delivered with compassion, precision, and state-of-the-art diagnostic capabilities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="neuro-tabs" data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`neuro-tab${activeTab === cat.id ? ' active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="neuro-content" key={activeTab}>
          <div className="neuro-content-img" data-aos="fade-right">
            <img src={active.image} alt={active.title} loading="lazy" />
            <div className="neuro-img-label">
              <span className="neuro-label-icon">{active.icon}</span>
              <span>{active.title}</span>
            </div>
          </div>

          <div className="neuro-services-list" data-aos="fade-left">
            <h3 className="neuro-list-title">{active.title}</h3>
            <div className="neuro-grid">
              {active.services.map((s, i) => (
                <div
                  className="neuro-service-card"
                  key={i}
                  onClick={() => navigate(`/services/${active.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="neuro-service-num">{String(i+1).padStart(2,'0')}</div>
                  <div className="neuro-service-info">
                    <h5>{s.name}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <button
                className="btn-primary"
                onClick={() => navigate(`/services/${active.id}`)}
              >
                <span><FiArrowRight size={15} /> View Full Page for {active.title}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroServices;
