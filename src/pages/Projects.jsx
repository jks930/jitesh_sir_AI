import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allProjects = [
  {
    slug: 'agriculture-technology',
    category: 'AgriTech',
    year: '2024',
    duration: '18 Months',
    client: 'AgriVision Corp',
    location: 'Maharashtra, India',
    icon: 'gtn gtn-idea_generate-light',
    title: 'Agriculture Technology',
    subtitle: 'AI-Powered Precision Farming for Sustainable Food Production',
    stats: [
      { val: '38%', label: 'Yield Increase' },
      { val: '45%', label: 'Water Saved' },
      { val: '3×', label: 'Faster Detection' },
    ],
    techStack: ['Computer Vision', 'IoT Sensors', 'Drone Automation'],
    status: 'Completed',
  },
  {
    slug: 'robotic-technology',
    category: 'Manufacturing',
    year: '2024',
    duration: '12 Months',
    client: 'TechManufacture Ltd.',
    location: 'Pune, India',
    icon: 'gtn gtn-codepen-line',
    title: 'Robotic Technology',
    subtitle: 'Autonomous Robotic Assembly Line for Precision Electronics Manufacturing',
    stats: [
      { val: '99.9%', label: 'Accuracy Rate' },
      { val: '280%', label: 'Capacity Increase' },
      { val: '60%', label: 'Cost Reduction' },
    ],
    techStack: ['6-Axis Robots', 'Computer Vision', 'SCADA Systems'],
    status: 'Completed',
  },
  {
    slug: 'natural-language-processing-nlp',
    category: 'Enterprise AI',
    year: '2024',
    duration: '9 Months',
    client: 'FinServe Bank',
    location: 'Mumbai, India',
    icon: 'gtn gtn-chat-light',
    title: 'Natural Language Processing',
    subtitle: 'Intelligent Document Processing & Customer Service AI for Banking',
    stats: [
      { val: '78%', label: 'Auto-Resolved' },
      { val: '82%', label: 'Wait Time Cut' },
      { val: '4.6/5', label: 'CSAT Score' },
    ],
    techStack: ['LLM Fine-tuning', 'OCR & Document AI', 'Sentiment Analysis'],
    status: 'Completed',
  },
  {
    slug: 'computer-vision-system',
    category: 'Security & Safety',
    year: '2024',
    duration: '14 Months',
    client: 'SafeCity Initiative',
    location: 'Bengaluru, India',
    icon: 'gtn gtn-Computer-light',
    title: 'Computer Vision System',
    subtitle: 'AI-Powered Smart Surveillance & Safety Analytics for Urban Infrastructure',
    stats: [
      { val: '41%', label: 'Faster Response' },
      { val: '28%', label: 'Less Congestion' },
      { val: '1,200+', label: 'Cameras Live' },
    ],
    techStack: ['Deep Learning Vision', 'Edge AI', 'Adaptive Traffic Control'],
    status: 'Completed',
  },
  {
    slug: 'robotic-technology',
    category: 'Healthcare',
    year: '2025',
    duration: '20 Months',
    client: 'MedCore Hospitals',
    location: 'Delhi, India',
    icon: 'gtn gtn-crane-2-light',
    title: 'Surgical Robotics Platform',
    subtitle: 'AI-Assisted Robotic Surgery System for Minimally Invasive Procedures',
    stats: [
      { val: '95%', label: 'Precision Rate' },
      { val: '60%', label: 'Recovery Faster' },
      { val: '12', label: 'Hospitals Deployed' },
    ],
    techStack: ['Surgical Robotics', 'Computer Vision', 'Haptic Feedback AI'],
    status: 'Completed',
  },
  {
    slug: 'agriculture-technology',
    category: 'Smart City',
    year: '2025',
    duration: '16 Months',
    client: 'UrbanFlow Corp',
    location: 'Hyderabad, India',
    icon: 'gtn gtn-idea_generate-light',
    title: 'Smart Energy Management',
    subtitle: 'IoT & AI-Driven Energy Optimization Across 500+ Commercial Buildings',
    stats: [
      { val: '35%', label: 'Energy Saved' },
      { val: '₹8Cr', label: 'Annual Savings' },
      { val: '500+', label: 'Buildings Live' },
    ],
    techStack: ['IoT Sensors', 'Predictive Analytics', 'Edge Computing'],
    status: 'Completed',
  },
];

const categories = ['All', 'AgriTech', 'Manufacturing', 'Enterprise AI', 'Security & Safety', 'Healthcare', 'Smart City'];

const globalStats = [
  { val: '120+', label: 'Projects Delivered', icon: 'gtn gtn-badge' },
  { val: '20+', label: 'Industries Served', icon: 'gtn gtn-crane-2-light' },
  { val: '98%', label: 'Client Satisfaction', icon: 'gtn gtn-review-light' },
  { val: '15+', label: 'Countries Reached', icon: 'gtn gtn-team-1-light' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="svc-detail-page proj-listing-page">

      {/* ── HERO ── */}
      <section className="svc-hero proj-listing-hero">
        <div className="svc-hero-bg-grid"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-inner">
          <div className="svc-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <span>Projects</span>
          </div>
          <div className="svc-hero-icon-badge">
            <i className="gtn gtn-codepen-line"></i>
          </div>
          <h1 className="svc-hero-title">
            Take a Look at Our{' '}
            <span className="svc-cyan">Completed Projects</span>
          </h1>
          <p className="svc-hero-desc">
            From AI-powered precision agriculture to smart city surveillance, our projects demonstrate
            the transformative power of artificial intelligence and robotics across every major industry.
          </p>
        </div>
      </section>

      {/* ── GLOBAL STATS ── */}
      <section className="svc-stats-bar">
        {globalStats.map((s, i) => (
          <div key={i} className="svc-stat-item">
            <div className="svc-stat-icon"><i className={s.icon}></i></div>
            <div className="svc-stat-value">{s.val}</div>
            <div className="svc-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="proj-listing-section">
        <div className="proj-listing-inner">

          {/* Filter Tabs */}
          <div className="proj-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="proj-listing-grid">
            {filtered.map((proj, i) => (
              <div key={i} className="proj-listing-card">

                {/* Card Header */}
                <div className="proj-card-header">
                  <div className="proj-card-icon">
                    <i className={proj.icon}></i>
                  </div>
                  <div className="proj-card-badges">
                    <span className="blog-category-badge">{proj.category}</span>
                    <span className="proj-status-badge completed">● {proj.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="proj-card-title">{proj.title}</h3>
                <p className="proj-card-subtitle">{proj.subtitle}</p>

                {/* Mini Stats */}
                <div className="proj-card-stats">
                  {proj.stats.map((st, j) => (
                    <div key={j} className="proj-card-stat">
                      <span className="proj-card-stat-val">{st.val}</span>
                      <span className="proj-card-stat-label">{st.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="proj-card-tech">
                  {proj.techStack.map((t, j) => (
                    <span key={j} className="proj-tech-tag">{t}</span>
                  ))}
                </div>

                {/* Meta + CTA */}
                <div className="proj-card-footer">
                  <div className="proj-card-meta">
                    <span><i className="fas fa-user"></i> {proj.client}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {proj.location}</span>
                  </div>
                  <Link to={`/projects/${proj.slug}`} className="proj-card-cta">
                    View Project <span>→</span>
                  </Link>
                </div>

                {/* Hover line */}
                <div className="svc-feature-line"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta-section">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-inner">
          <h2 className="svc-cta-title">
            Have a Project in <span className="svc-cyan">Mind?</span>
          </h2>
          <p className="svc-cta-desc">
            Let's build something extraordinary together. Our team is ready to bring your vision to life with AI.
          </p>
          <div className="svc-cta-actions">
            <Link to="/contact" className="svc-btn-primary">Start Your Project</Link>
            <Link to="/services" className="svc-btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
