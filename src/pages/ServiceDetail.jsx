import React from 'react';
import { useParams, Link } from 'react-router-dom';

const servicesData = {
  'robotic-automation': {
    icon: 'gtn gtn-codepen-line',
    title: 'Robotic Automation',
    subtitle: 'Intelligent Machines. Limitless Possibilities.',
    description:
      'Robotic automation uses AI-powered robots to perform repetitive, high-volume tasks with incredible speed and accuracy. It reduces human error, lowers costs, and increases productivity across manufacturing, logistics, and other industries.',
    features: [
      'Automated assembly lines',
      'Smart warehouse management',
      'Quality control systems',
      'Predictive maintenance',
      'Human-robot collaboration',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Up to 80% Cost Reduction', value: '80%' },
      { icon: 'gtn gtn-review-light', label: 'Accuracy Rate', value: '99.9%' },
      { icon: 'gtn gtn-team-1-light', label: '24/7 Operations', value: '∞' },
    ],
  },
  'ai-for-conversation': {
    icon: 'gtn gtn-chat-light',
    title: 'AI For Conversation',
    subtitle: 'Talk Smarter. Connect Deeper.',
    description:
      'Conversational AI enables machines to understand, process, and respond to human language naturally. From intelligent chatbots to voice assistants, we build solutions that enhance customer engagement and automate support operations.',
    features: [
      'Natural Language Processing (NLP)',
      'Multilingual chatbot support',
      'Voice recognition systems',
      'Sentiment analysis',
      'Automated customer support',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Faster Response Time', value: '60%' },
      { icon: 'gtn gtn-review-light', label: 'Customer Support', value: '24/7' },
      { icon: 'gtn gtn-team-1-light', label: 'Language Support', value: '50+' },
    ],
  },
  'machine-learning': {
    icon: 'gtn gtn-codesandbox-line',
    title: 'Machine Learning',
    subtitle: 'Data That Learns. Systems That Evolve.',
    description:
      'Machine learning allows systems to learn from data and improve over time without being explicitly programmed. We design and deploy custom ML models that help businesses make smarter decisions, predict trends, and automate complex processes.',
    features: [
      'Supervised & unsupervised learning',
      'Deep learning & neural networks',
      'Predictive analytics',
      'Anomaly detection',
      'Recommendation engines',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Data-Driven Decisions', value: '100%' },
      { icon: 'gtn gtn-review-light', label: 'Model Improvement', value: 'Auto' },
      { icon: 'gtn gtn-team-1-light', label: 'Scalable Architecture', value: '∞' },
    ],
  },
  'internet-of-things': {
    icon: 'gtn gtn-idea_generate-light',
    title: 'Internet of Things',
    subtitle: 'Connect Everything. Control Anything.',
    description:
      'IoT connects physical devices to the internet, enabling real-time data collection and smart automation. Our IoT solutions bridge the gap between the physical and digital worlds, creating intelligent, connected ecosystems for homes and industries.',
    features: [
      'Smart sensor integration',
      'Real-time data monitoring',
      'Edge computing solutions',
      'Industrial IoT (IIoT)',
      'Smart home & city systems',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Real-Time Monitoring', value: 'Live' },
      { icon: 'gtn gtn-review-light', label: 'Remote Access', value: 'Any' },
      { icon: 'gtn gtn-team-1-light', label: 'Energy Efficiency', value: '40%' },
    ],
  },
  'industrial-automation': {
    icon: 'gtn gtn-crane-2-light',
    title: 'Industrial Automation',
    subtitle: 'From Manual to Masterful.',
    description:
      'Industrial automation integrates advanced control systems, robotics, and AI to streamline manufacturing and production. We help industries transition from manual to fully automated workflows, boosting output and operational efficiency.',
    features: [
      'SCADA & PLC systems',
      'Automated production lines',
      'Process control & optimization',
      'Energy management systems',
      'Smart factory design',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Productivity Boost', value: '40%' },
      { icon: 'gtn gtn-review-light', label: 'Zero Downtime', value: '99%' },
      { icon: 'gtn gtn-team-1-light', label: 'ISO Compliant', value: '✓' },
    ],
  },
  'computer-vision': {
    icon: 'gtn gtn-Computer-light',
    title: 'Computer Vision',
    subtitle: 'See More. Know More. Do More.',
    description:
      'Computer vision empowers machines to interpret and understand the visual world. Using AI and deep learning, our systems can analyze images and videos to detect objects, recognize faces, and make automated decisions at scale.',
    features: [
      'Object detection & tracking',
      'Facial recognition systems',
      'Defect detection in manufacturing',
      'Medical image analysis',
      'Video surveillance & analytics',
    ],
    benefits: [
      { icon: 'gtn gtn-badge', label: 'Detection Accuracy', value: '95%+' },
      { icon: 'gtn gtn-review-light', label: 'Real-Time Processing', value: 'Live' },
      { icon: 'gtn gtn-team-1-light', label: 'Multi-Camera Scalable', value: '∞' },
    ],
  },
};

const allServicesList = [
  { id: 'robotic-automation', icon: 'gtn gtn-codepen-line', title: 'Robotic Automation' },
  { id: 'ai-for-conversation', icon: 'gtn gtn-chat-light', title: 'AI For Conversation' },
  { id: 'machine-learning', icon: 'gtn gtn-codesandbox-line', title: 'Machine Learning' },
  { id: 'internet-of-things', icon: 'gtn gtn-idea_generate-light', title: 'Internet of Things' },
  { id: 'industrial-automation', icon: 'gtn gtn-crane-2-light', title: 'Industrial Automation' },
  { id: 'computer-vision', icon: 'gtn gtn-Computer-light', title: 'Computer Vision' },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="svc-not-found">
        <div className="svc-icon-wrap">
          <i className="gtn gtn-chat-light"></i>
        </div>
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="svc-back-btn">← Back to Services</Link>
      </div>
    );
  }

  const relatedServices = allServicesList.filter((s) => s.id !== serviceId).slice(0, 3);

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
            <Link to="/services">Services</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <span>{service.title}</span>
          </div>
          <div className="svc-hero-icon-badge">
            <i className={service.icon}></i>
          </div>
          <h1 className="svc-hero-title">{service.title}</h1>
          <p className="svc-hero-subtitle">{service.subtitle}</p>
          <p className="svc-hero-desc">{service.description}</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="svc-btn-primary">Get Started</Link>
            <Link to="/services" className="svc-btn-outline">← All Services</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="svc-stats-bar">
        {service.benefits.map((b, i) => (
          <div key={i} className="svc-stat-item">
            <div className="svc-stat-icon"><i className={b.icon}></i></div>
            <div className="svc-stat-value">{b.value}</div>
            <div className="svc-stat-label">{b.label}</div>
          </div>
        ))}
      </section>

      {/* ── FEATURES ── */}
      <section className="svc-features-section">
        <div className="svc-features-inner">
          <div className="svc-section-tag">What We Offer</div>
          <h2 className="svc-section-title">
            Key <span className="svc-cyan">Features</span>
          </h2>
          <div className="svc-features-grid">
            {service.features.map((feat, i) => (
              <div key={i} className="svc-feature-card">
                <div className="svc-feature-num">0{i + 1}</div>
                <div className="svc-feature-icon-wrap">
                  <i className={service.icon}></i>
                </div>
                <div className="svc-feature-text">{feat}</div>
                <div className="svc-feature-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="svc-why-section">
        <div className="svc-why-inner">
          <div className="svc-why-left">
            <div className="svc-section-tag">Our Advantage</div>
            <h2 className="svc-section-title">
              Why <span className="svc-cyan">Choose Us</span>
            </h2>
            <p className="svc-why-desc">
              We combine cutting-edge AI research with deep industry expertise to deliver
              solutions that are not just powerful — but transformative. Our team ensures
              every implementation is seamless, scalable, and results-driven.
            </p>
            <ul className="svc-why-list">
              <li><span className="svc-check">✔</span> Proven track record across 20+ industries</li>
              <li><span className="svc-check">✔</span> End-to-end implementation support</li>
              <li><span className="svc-check">✔</span> Dedicated post-deployment maintenance</li>
              <li><span className="svc-check">✔</span> Custom-built solutions — no generic templates</li>
            </ul>
            <Link to="/contact" className="svc-btn-primary" style={{ marginTop: '28px', display: 'inline-block' }}>
              Talk to Our Experts
            </Link>
          </div>
          <div className="svc-why-right">
            {service.benefits.map((b, i) => (
              <div key={i} className="svc-benefit-card">
                <div className="svc-benefit-icon"><i className={b.icon}></i></div>
                <div className="svc-benefit-info">
                  <div className="svc-benefit-value">{b.value}</div>
                  <div className="svc-benefit-label">{b.label}</div>
                </div>
                <div className="svc-benefit-bar">
                  <div className="svc-benefit-bar-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="svc-related-section">
        <div className="svc-related-inner">
          <div className="svc-section-tag">Explore More</div>
          <h2 className="svc-section-title">
            Other <span className="svc-cyan">AI Services</span>
          </h2>
          <div className="svc-related-grid">
            {relatedServices.map((s) => (
              <div key={s.id} className="svc-related-card">
                <div className="svc-related-icon"><i className={s.icon}></i></div>
                <h4 className="svc-related-title">{s.title}</h4>
                <p className="svc-related-desc">{servicesData[s.id]?.subtitle}</p>
                <Link to={`/services/${s.id}`} className="svc-related-link">
                  Read More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="svc-cta-section">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-inner">
          <h2 className="svc-cta-title">
            Ready to Transform Your Business with <span className="svc-cyan">AI?</span>
          </h2>
          <p className="svc-cta-desc">
            Let's build something extraordinary together. Contact our team today.
          </p>
          <div className="svc-cta-actions">
            <Link to="/contact" className="svc-btn-primary">Contact Us Now</Link>
            <Link to="/services" className="svc-btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
