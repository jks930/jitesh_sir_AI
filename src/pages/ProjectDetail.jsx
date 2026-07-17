import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  'agriculture-technology': {
    category: 'AgriTech',
    status: 'Completed',
    year: '2024',
    duration: '18 Months',
    client: 'AgriVision Corp',
    location: 'Maharashtra, India',
    heroIcon: 'gtn gtn-idea_generate-light',
    title: 'Agriculture Technology',
    subtitle: 'AI-Powered Precision Farming for Sustainable Food Production',
    overview: `This landmark project deployed a fully integrated AI and IoT precision agriculture platform across 50,000 acres of farmland in Maharashtra. The system combines drone-based multispectral imaging, soil sensor networks, weather prediction AI, and autonomous irrigation control to optimize crop yields while dramatically reducing water and chemical inputs.`,
    challenge: `Traditional farming in the region relied on seasonal intuition and blanket irrigation schedules that wasted up to 60% of water resources. Crop diseases were detected only when visible to the naked eye — often too late for effective intervention. The client needed a scalable, affordable solution that rural farmers could operate without advanced technical training.`,
    solution: `We deployed a three-layer technology stack: (1) A network of 2,400 soil moisture, temperature, and nutrient sensors across the farmland, feeding real-time data to our cloud platform. (2) A fleet of autonomous drones equipped with multispectral cameras that fly programmatic grid routes every 72 hours, capturing detailed crop health maps. (3) A central AI dashboard that synthesizes all sensor data, satellite imagery, and weather forecasts to generate automated irrigation commands and early disease alerts.`,
    results: [
      { metric: '38%', label: 'Increase in Crop Yield', icon: 'gtn gtn-badge' },
      { metric: '45%', label: 'Reduction in Water Usage', icon: 'gtn gtn-review-light' },
      { metric: '3×', label: 'Faster Disease Detection', icon: 'gtn gtn-Computer-light' },
      { metric: '₹12Cr', label: 'Annual Cost Savings', icon: 'gtn gtn-medal' },
    ],
    techStack: ['Computer Vision', 'IoT Sensors', 'Edge Computing', 'Drone Automation', 'Predictive Analytics', 'Cloud AI Platform'],
    phases: [
      { phase: 'Phase 1', title: 'Infrastructure Deployment', desc: 'Sensor network installation and drone fleet commissioning across all 50,000 acres.' },
      { phase: 'Phase 2', title: 'AI Model Training', desc: 'Custom crop disease detection and yield prediction models trained on 6 months of baseline data.' },
      { phase: 'Phase 3', title: 'Automation Integration', desc: 'Autonomous irrigation control and alert system integrated with existing farm management workflows.' },
      { phase: 'Phase 4', title: 'Farmer Training & Handover', desc: 'Comprehensive training program for 340 farm managers on the AI dashboard and drone operations.' },
    ],
    testimonial: {
      text: `"The Ariva Infotech precision farming platform has transformed how we manage our operations. We're producing more food using fewer resources — it's exactly the kind of innovation Indian agriculture needs."`,
      author: 'Suresh Patil',
      role: 'CEO, AgriVision Corp',
    },
    related: [
      { slug: 'robotic-technology', title: 'Robotic Technology' },
      { slug: 'natural-language-processing-nlp', title: 'Natural Language Processing' },
      { slug: 'computer-vision-system', title: 'Computer Vision System' },
    ],
  },
  'robotic-technology': {
    category: 'Manufacturing',
    status: 'Completed',
    year: '2024',
    duration: '12 Months',
    client: 'TechManufacture Ltd.',
    location: 'Pune, India',
    heroIcon: 'gtn gtn-codepen-line',
    title: 'Robotic Technology',
    subtitle: 'Autonomous Robotic Assembly Line for Precision Electronics Manufacturing',
    overview: `This project delivered a fully automated robotic assembly line for a leading electronics manufacturer in Pune. Six-axis industrial robots handle component placement, soldering, and quality inspection with AI-guided computer vision — operating 24/7 with less than 0.1% defect rate.`,
    challenge: `The client was losing market competitiveness due to rising labor costs, inconsistent product quality, and inability to scale production rapidly in response to demand spikes. Their existing manual assembly process had an 8% defect rate and required 120 workers per shift across three shifts.`,
    solution: `We designed and deployed a hybrid human-robot assembly system featuring 24 collaborative robotic arms and a central AI quality control station. Robots handle high-precision component placement and soldering while a computer vision system inspects every board at 12 quality checkpoints. Human technicians focus exclusively on final testing, packaging, and exception handling — work that benefits from human judgment.`,
    results: [
      { metric: '99.9%', label: 'Product Accuracy Rate', icon: 'gtn gtn-badge' },
      { metric: '280%', label: 'Production Capacity Increase', icon: 'gtn gtn-review-light' },
      { metric: '60%', label: 'Labor Cost Reduction', icon: 'gtn gtn-medal' },
      { metric: '24/7', label: 'Continuous Operation', icon: 'gtn gtn-Computer-light' },
    ],
    techStack: ['6-Axis Robotic Arms', 'Computer Vision', 'PLC Integration', 'SCADA Systems', 'Machine Learning QC', 'Digital Twin'],
    phases: [
      { phase: 'Phase 1', title: 'Process Analysis & Design', desc: 'Detailed workflow mapping and robotic cell design optimized for the existing factory layout.' },
      { phase: 'Phase 2', title: 'Robot Installation & Programming', desc: 'Installation of 24 robotic arms and programming of 847 distinct assembly sequences.' },
      { phase: 'Phase 3', title: 'Vision System Integration', desc: 'Deployment of AI quality inspection system with custom-trained defect detection models.' },
      { phase: 'Phase 4', title: 'Go-Live & Optimization', desc: '90-day monitored production run with continuous model refinement and performance tuning.' },
    ],
    testimonial: {
      text: '"We went from struggling to compete on quality and cost to being the benchmark our competitors measure themselves against. The ROI was achieved in under 14 months."',
      author: 'Amit Desai',
      role: 'VP Operations, TechManufacture Ltd.',
    },
    related: [
      { slug: 'agriculture-technology', title: 'Agriculture Technology' },
      { slug: 'computer-vision-system', title: 'Computer Vision System' },
      { slug: 'natural-language-processing-nlp', title: 'Natural Language Processing' },
    ],
  },
  'natural-language-processing-nlp': {
    category: 'Enterprise AI',
    status: 'Completed',
    year: '2024',
    duration: '9 Months',
    client: 'FinServe Bank',
    location: 'Mumbai, India',
    heroIcon: 'gtn gtn-chat-light',
    title: 'Natural Language Processing',
    subtitle: 'Intelligent Document Processing & Customer Service AI for Banking',
    overview: `FinServe Bank partnered with Ariva Infotech to deploy an enterprise NLP platform that automates document processing, powers an intelligent customer service chatbot, and provides real-time sentiment analysis across all customer interactions — handling 2 million+ customer touchpoints monthly.`,
    challenge: `The bank's customer service center was overwhelmed, with average wait times exceeding 18 minutes. Back-office teams manually processed 50,000+ documents daily — loan applications, KYC documents, account forms — with high error rates and compliance risk. Customer satisfaction scores were declining sharply.`,
    solution: `We built and deployed three integrated NLP solutions: (1) An intelligent chatbot trained on the bank's complete product catalog and 5 years of customer interaction history, capable of resolving 78% of inquiries without human escalation. (2) An automated document processing pipeline that classifies, extracts, and routes document data to core banking systems with 96% accuracy. (3) A real-time sentiment analysis dashboard that monitors all customer communications and flags distress signals to supervisors instantly.`,
    results: [
      { metric: '78%', label: 'Queries Resolved Automatically', icon: 'gtn gtn-badge' },
      { metric: '82%', label: 'Reduction in Wait Time', icon: 'gtn gtn-review-light' },
      { metric: '96%', label: 'Document Processing Accuracy', icon: 'gtn gtn-Computer-light' },
      { metric: '4.6/5', label: 'Customer Satisfaction Score', icon: 'gtn gtn-medal' },
    ],
    techStack: ['Large Language Models', 'BERT Fine-tuning', 'OCR & Document AI', 'Sentiment Analysis', 'REST API Integration', 'Real-time Dashboard'],
    phases: [
      { phase: 'Phase 1', title: 'Data Audit & Preparation', desc: 'Analysis of 5 years of customer interaction data and document samples for model training.' },
      { phase: 'Phase 2', title: 'Model Development', desc: 'Fine-tuning of base language models on bank-specific terminology, products, and compliance requirements.' },
      { phase: 'Phase 3', title: 'Integration & Testing', desc: 'API integration with core banking systems and rigorous testing with 500+ edge case scenarios.' },
      { phase: 'Phase 4', title: 'Phased Deployment', desc: 'Gradual rollout starting with 10% of traffic, scaling to 100% over 8 weeks with continuous monitoring.' },
    ],
    testimonial: {
      text: '"Our customer experience has been transformed. What used to be a pain point — customer service — is now a competitive advantage. The NLP platform paid for itself in under a year."',
      author: 'Ritu Menon',
      role: 'Chief Digital Officer, FinServe Bank',
    },
    related: [
      { slug: 'agriculture-technology', title: 'Agriculture Technology' },
      { slug: 'robotic-technology', title: 'Robotic Technology' },
      { slug: 'computer-vision-system', title: 'Computer Vision System' },
    ],
  },
  'computer-vision-system': {
    category: 'Security & Safety',
    status: 'Completed',
    year: '2024',
    duration: '14 Months',
    client: 'SafeCity Initiative',
    location: 'Bengaluru, India',
    heroIcon: 'gtn gtn-Computer-light',
    title: 'Computer Vision System',
    subtitle: 'AI-Powered Smart Surveillance & Safety Analytics for Urban Infrastructure',
    overview: `This smart city project deployed an advanced computer vision platform across Bengaluru's 1,200+ public cameras, enabling real-time crowd monitoring, anomaly detection, traffic flow optimization, and incident response coordination — making the city measurably safer and more efficient.`,
    challenge: `Traditional CCTV systems required banks of security personnel to monitor footage manually — an exhausting, error-prone task where critical incidents were often missed. Traffic management relied on fixed-timing signals that caused unnecessary congestion. Emergency response times were hampered by poor situational awareness.`,
    solution: `We deployed a unified AI computer vision platform that processes all 1,200+ camera feeds simultaneously in real time. The system's neural networks are trained to detect crowd density anomalies, abandoned objects, traffic violations, accidents, and unusual behavior patterns. An intelligent alert system notifies relevant responders — police, traffic control, emergency services — with precise location data and visual context. Adaptive traffic signal control algorithms continuously optimize signal timing based on live traffic density.`,
    results: [
      { metric: '41%', label: 'Reduction in Response Time', icon: 'gtn gtn-badge' },
      { metric: '28%', label: 'Traffic Congestion Reduction', icon: 'gtn gtn-review-light' },
      { metric: '1,200+', label: 'Cameras Monitored Live', icon: 'gtn gtn-Computer-light' },
      { metric: '99.2%', label: 'Uptime Reliability', icon: 'gtn gtn-medal' },
    ],
    techStack: ['Deep Learning Vision Models', 'Edge AI Processing', 'Real-Time Video Analytics', 'Adaptive Traffic Control', 'GIS Integration', 'Emergency Response API'],
    phases: [
      { phase: 'Phase 1', title: 'Infrastructure Assessment', desc: 'Technical audit of existing camera infrastructure and network capacity planning.' },
      { phase: 'Phase 2', title: 'Edge AI Deployment', desc: 'Installation of AI processing units at 120 network nodes to enable real-time local inference.' },
      { phase: 'Phase 3', title: 'Model Training & Calibration', desc: 'Training of custom detection models on city-specific scenarios, lighting conditions, and crowd patterns.' },
      { phase: 'Phase 4', title: 'Operations Center Integration', desc: 'Integration with police, traffic authority, and emergency services command centers.' },
    ],
    testimonial: {
      text: '"The Ariva Infotech computer vision platform has fundamentally changed how we manage our city. We respond to incidents faster, manage traffic more intelligently, and our citizens feel safer."',
      author: 'Rajesh Kumar',
      role: 'Smart City Director, SafeCity Initiative',
    },
    related: [
      { slug: 'robotic-technology', title: 'Robotic Technology' },
      { slug: 'agriculture-technology', title: 'Agriculture Technology' },
      { slug: 'natural-language-processing-nlp', title: 'Natural Language Processing' },
    ],
  },
};

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = projectData[projectSlug];

  if (!project) {
    return (
      <div className="svc-not-found">
        <div className="svc-icon-wrap">
          <i className="gtn gtn-codepen-line"></i>
        </div>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="svc-back-btn">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="svc-detail-page proj-detail-page">

      {/* ── HERO ── */}
      <section className="svc-hero proj-hero">
        <div className="svc-hero-bg-grid"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-inner">
          <div className="svc-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <Link to="/projects">Projects</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <span>{project.title}</span>
          </div>

          <div className="blog-meta-row">
            <span className="blog-category-badge">{project.category}</span>
            <span className={`proj-status-badge ${project.status === 'Completed' ? 'completed' : 'ongoing'}`}>
              ● {project.status}
            </span>
          </div>

          <div className="svc-hero-icon-badge">
            <i className={project.heroIcon}></i>
          </div>

          <h1 className="svc-hero-title">{project.title}</h1>
          <p className="svc-hero-subtitle">{project.subtitle}</p>

          <div className="proj-meta-strip">
            <div className="proj-meta-item"><i className="fas fa-user"></i> {project.client}</div>
            <div className="proj-meta-item"><i className="fas fa-map-marker-alt"></i> {project.location}</div>
            <div className="proj-meta-item"><i className="fas fa-calendar"></i> {project.year}</div>
            <div className="proj-meta-item"><i className="fas fa-clock"></i> {project.duration}</div>
          </div>
        </div>
      </section>

      {/* ── RESULTS STATS ── */}
      <section className="svc-stats-bar">
        {project.results.map((r, i) => (
          <div key={i} className="svc-stat-item">
            <div className="svc-stat-icon"><i className={r.icon}></i></div>
            <div className="svc-stat-value">{r.metric}</div>
            <div className="svc-stat-label">{r.label}</div>
          </div>
        ))}
      </section>

      {/* ── OVERVIEW & CHALLENGE ── */}
      <section className="svc-features-section">
        <div className="svc-features-inner">
          <div className="proj-content-grid">
            <div>
              <div className="svc-section-tag">Project Overview</div>
              <h2 className="svc-section-title">
                About This <span className="svc-cyan">Project</span>
              </h2>
              <p className="svc-why-desc">{project.overview}</p>

              <div className="proj-challenge-box">
                <div className="proj-challenge-label">
                  <i className="fas fa-exclamation-circle"></i> The Challenge
                </div>
                <p>{project.challenge}</p>
              </div>
            </div>

            <div>
              <div className="svc-section-tag">Our Solution</div>
              <h2 className="svc-section-title">
                How We <span className="svc-cyan">Solved It</span>
              </h2>
              <p className="svc-why-desc">{project.solution}</p>

              <div className="proj-tech-stack">
                <div className="proj-tech-label">Technologies Used</div>
                <div className="proj-tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="proj-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT PHASES ── */}
      <section className="svc-why-section">
        <div className="svc-features-inner">
          <div className="svc-section-tag">Project Timeline</div>
          <h2 className="svc-section-title">
            Delivery <span className="svc-cyan">Phases</span>
          </h2>
          <div className="proj-phases-grid">
            {project.phases.map((ph, i) => (
              <div key={i} className="proj-phase-card">
                <div className="proj-phase-num">{i + 1}</div>
                <div className="proj-phase-badge">{ph.phase}</div>
                <h4 className="proj-phase-title">{ph.title}</h4>
                <p className="proj-phase-desc">{ph.desc}</p>
                {i < project.phases.length - 1 && <div className="proj-phase-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="proj-testimonial-section">
        <div className="proj-testimonial-inner">
          <div className="proj-testimonial-card">
            <div className="proj-quote-icon"><i className="gtn gtn-quote1-light"></i></div>
            <p className="proj-testimonial-text">{project.testimonial.text}</p>
            <div className="proj-testimonial-author">
              <div className="proj-author-avatar">
                <i className={project.heroIcon}></i>
              </div>
              <div>
                <strong>{project.testimonial.author}</strong>
                <span>{project.testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ── */}
      <section className="svc-related-section">
        <div className="svc-related-inner">
          <div className="svc-section-tag">Explore More</div>
          <h2 className="svc-section-title">
            Other <span className="svc-cyan">Projects</span>
          </h2>
          <div className="svc-related-grid">
            {project.related.map((rel) => {
              const relProj = projectData[rel.slug];
              return (
                <div key={rel.slug} className="svc-related-card">
                  <div className="blog-related-category">{relProj?.category || 'AI'}</div>
                  <div className="svc-related-icon">
                    <i className={relProj?.heroIcon || 'gtn gtn-codepen-line'}></i>
                  </div>
                  <h4 className="svc-related-title">{rel.title}</h4>
                  <p className="svc-related-desc">{relProj?.subtitle?.slice(0, 70)}...</p>
                  <Link to={`/projects/${rel.slug}`} className="svc-related-link">
                    View Project <span>→</span>
                  </Link>
                </div>
              );
            })}
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
            Let's build something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="svc-cta-actions">
            <Link to="/contact" className="svc-btn-primary">Start Your Project</Link>
            <Link to="/projects" className="svc-btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
