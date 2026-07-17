import React from 'react';
import { Link } from 'react-router-dom';

export default function TransformBusiness() {
  return (
    <div className="svc-detail-page">
      {/* ── HERO ── */}
      <section className="svc-hero">
        <div className="svc-hero-bg-grid"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-inner">
          <div className="svc-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <span>Transform Business</span>
          </div>
          <div className="svc-hero-icon-badge">
            <i className="gtn gtn-idea_generate-light"></i>
          </div>
          <h1 className="svc-hero-title">
            Transform Your Business with <span className="svc-cyan">AI Technology</span>
          </h1>
          <p className="svc-hero-desc">
            In today's fast-paced digital landscape, artificial intelligence is no longer a luxury—it's a necessity. We empower businesses to unlock unprecedented growth, efficiency, and innovation through state-of-transformative AI solutions.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="svc-features-section">
        <div className="svc-features-inner">
          <div className="svc-features-heading">
            <h2 className="svc-section-title">Why Adopt AI Now?</h2>
            <p className="svc-section-subtitle">
              Artificial intelligence redefines how businesses operate, from automating mundane tasks to uncovering deep insights from massive datasets. Let us help you navigate the AI revolution.
            </p>
          </div>
          <div className="svc-features-grid">
            <div className="svc-feature-card">
              <div className="svc-feature-icon-wrap"><i className="gtn gtn-codepen-line"></i></div>
              <h3 className="svc-feature-text">Operational Efficiency</h3>
              <p style={{ color: 'var(--svc-muted)', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
                Automate workflows, reduce human error, and streamline your operations to save time and resources.
              </p>
              <div className="svc-feature-line"></div>
            </div>
            <div className="svc-feature-card">
              <div className="svc-feature-icon-wrap"><i className="gtn gtn-bar-chart-light"></i></div>
              <h3 className="svc-feature-text">Data-Driven Insights</h3>
              <p style={{ color: 'var(--svc-muted)', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
                Transform raw data into actionable intelligence, enabling predictive analytics and smarter decisions.
              </p>
              <div className="svc-feature-line"></div>
            </div>
            <div className="svc-feature-card">
              <div className="svc-feature-icon-wrap"><i className="gtn gtn-chat-light"></i></div>
              <h3 className="svc-feature-text">Customer Experience</h3>
              <p style={{ color: 'var(--svc-muted)', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
                Deploy intelligent chatbots and personalization engines to engage users 24/7 with customized content.
              </p>
              <div className="svc-feature-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="svc-why-section">
        <div className="svc-why-inner">
          <div className="svc-why-content">
            <h2 className="svc-section-title">Our Transformation Process</h2>
            <p className="svc-why-desc">
              We don't just hand you a piece of software. We partner with you to rethink your entire business model through the lens of artificial intelligence.
            </p>
            <ul className="svc-why-list">
              <li><i className="fas fa-check svc-check"></i> Comprehensive AI readiness assessment</li>
              <li><i className="fas fa-check svc-check"></i> Custom strategy and roadmap development</li>
              <li><i className="fas fa-check svc-check"></i> Seamless integration with existing systems</li>
              <li><i className="fas fa-check svc-check"></i> Continuous model training and optimization</li>
              <li><i className="fas fa-check svc-check"></i> Team upskilling and ongoing support</li>
            </ul>
          </div>
          <div className="svc-why-image" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--svc-border)' }}>
            <img src="/wp-content/uploads/sites/120/2025/08/the-advancement-of-technology-has-helped.webp" alt="AI Transformation" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta-section">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-inner">
          <h2 className="svc-cta-title">
            Ready to <span className="svc-cyan">Future-Proof</span> Your Business?
          </h2>
          <p className="svc-cta-desc">
            Take the first step towards an intelligent enterprise. Let's discuss how our custom AI solutions can solve your unique challenges.
          </p>
          <div className="svc-cta-actions">
            <Link to="/contact" className="svc-btn-primary">Get a Free Consultation</Link>
            <Link to="/services" className="svc-btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
