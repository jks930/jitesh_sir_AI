import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogData = {
  'transforming-industries-ai': {
    category: 'Robotics',
    tag: 'Industries',
    date: 'August 19, 2025',
    author: 'Dr. Aryan Mehta',
    authorRole: 'AI Research Lead',
    readTime: '8 min read',
    title: 'Transforming Industries and Changing Lives with AI',
    subtitle: 'How Artificial Intelligence is rewriting the rules across every major industry on the planet.',
    heroIcon: 'gtn gtn-codepen-line',
    intro: `Artificial Intelligence is no longer a futuristic concept confined to science fiction. It is here, it is real, and it is transforming every facet of modern industry at an unprecedented pace. From manufacturing floors powered by intelligent robots to hospitals where AI diagnoses diseases with superhuman accuracy — the revolution has begun.`,
    sections: [
      {
        heading: 'The Manufacturing Revolution',
        icon: 'gtn gtn-crane-2-light',
        content: `Smart factories equipped with AI-driven robotics are achieving levels of efficiency that were unimaginable just a decade ago. Predictive maintenance algorithms now monitor thousands of machine sensors in real time, alerting engineers before a breakdown occurs — slashing downtime by up to 40%. Assembly lines guided by computer vision inspect products at a rate no human team could match, catching microscopic defects with 99.9% accuracy.`,
      },
      {
        heading: 'Healthcare Transformation',
        icon: 'gtn gtn-Computer-light',
        content: `In healthcare, AI is literally saving lives. Deep learning models trained on millions of medical images can now detect early-stage cancers that even experienced radiologists might miss. Natural language processing tools are helping doctors spend less time on paperwork and more time with patients. AI-powered drug discovery platforms are compressing the timeline from research to clinical trials from decades to just a few years.`,
      },
      {
        heading: 'Agriculture Goes Intelligent',
        icon: 'gtn gtn-idea_generate-light',
        content: `Precision agriculture powered by AI and IoT sensors is feeding a growing global population more sustainably. Drones equipped with multispectral cameras analyze crop health across vast fields in minutes. Machine learning models predict weather patterns and optimize irrigation schedules, reducing water usage by 30% while increasing yields. Autonomous tractors navigate fields with centimeter-level GPS precision, planting and harvesting around the clock.`,
      },
      {
        heading: 'Financial Services & AI',
        icon: 'gtn gtn-badge',
        content: `Banks and financial institutions are deploying AI at every level. Fraud detection algorithms process millions of transactions per second, flagging suspicious activity in real time. Robo-advisors are democratizing wealth management, providing personalized investment strategies to retail investors. AI-powered credit scoring models are more accurate and less biased than traditional methods, expanding financial access to underserved communities.`,
      },
    ],
    keyTakeaways: [
      'AI reduces manufacturing downtime by up to 40%',
      'Medical AI detects cancers with 95%+ accuracy',
      'Precision agriculture cuts water usage by 30%',
      'Financial AI processes millions of transactions per second',
      'AI creates new jobs while transforming existing ones',
    ],
    related: [
      { slug: 'ethics-of-ai-robotics', title: 'Exploring the Ethics of AI and Robotics in Society' },
      { slug: 'ai-digital-marketing', title: 'How AI is Changing the Face of Digital Marketing' },
      { slug: 'natural-language-processing', title: 'Natural Language Processing: The Future of Communication' },
    ],
  },
  'ethics-of-ai-robotics': {
    category: 'Insight',
    tag: 'Robotics',
    date: 'August 19, 2025',
    author: 'Prof. Nisha Kapoor',
    authorRole: 'Ethics & Technology Researcher',
    readTime: '10 min read',
    title: 'Exploring the Ethics of AI and Robotics in Society',
    subtitle: 'As machines grow smarter, humanity must grapple with profound questions of fairness, privacy, and accountability.',
    heroIcon: 'gtn gtn-chat-light',
    intro: `The rapid advancement of artificial intelligence and robotics presents society with some of the most complex ethical questions in human history. When a self-driving car must choose between two bad outcomes, who is responsible? When an AI hiring tool discriminates against a minority group, how do we correct it? These questions demand urgent, thoughtful answers.`,
    sections: [
      {
        heading: 'Algorithmic Bias & Fairness',
        icon: 'gtn gtn-badge',
        content: `AI systems are trained on historical data, and if that data reflects societal biases — racism, sexism, economic inequality — the algorithms will reproduce and even amplify those biases. Facial recognition systems have been shown to misidentify dark-skinned individuals at rates far higher than light-skinned ones. Hiring algorithms trained on historical workforce data have perpetuated gender gaps. Addressing this requires diverse development teams, rigorous auditing, and transparent model documentation.`,
      },
      {
        heading: 'Privacy in the Age of Surveillance AI',
        icon: 'gtn gtn-Computer-light',
        content: `AI-powered surveillance systems can track individuals' movements, predict behavior, and build detailed profiles without their knowledge or consent. While such technology can combat crime, it also creates a chilling effect on free expression and assembly. Governments and corporations must balance legitimate security needs against citizens' fundamental right to privacy. Regulation like GDPR is a start, but global AI governance frameworks are urgently needed.`,
      },
      {
        heading: 'Accountability & The Black Box Problem',
        icon: 'gtn gtn-codesandbox-line',
        content: `One of the most troubling aspects of modern AI is its opacity. Deep learning models — the engines behind the most powerful AI applications — often cannot explain why they made a particular decision. When an AI denies someone a loan, rejects a job application, or informs a judicial sentencing decision, the affected person deserves an explanation. Explainable AI (XAI) research aims to open these black boxes, but significant technical and regulatory challenges remain.`,
      },
      {
        heading: 'The Future of Work & Human Dignity',
        icon: 'gtn gtn-team-1-light',
        content: `Automation will displace millions of jobs across every sector. While new jobs will emerge — AI trainers, ethics auditors, data curators — the transition will be painful for many workers. Society must invest in retraining programs, social safety nets, and education systems that prepare people for a world of human-machine collaboration. The goal must be technology that augments human potential rather than simply replacing human labor.`,
      },
    ],
    keyTakeaways: [
      'Algorithmic bias can encode and amplify social inequalities',
      'AI surveillance requires robust privacy protections',
      'Explainable AI is critical for accountability',
      'Worker retraining must accompany automation',
      'Global AI governance frameworks are urgently needed',
    ],
    related: [
      { slug: 'transforming-industries-ai', title: 'Transforming Industries and Changing Lives with AI' },
      { slug: 'ai-digital-marketing', title: 'How AI is Changing the Face of Digital Marketing' },
      { slug: 'natural-language-processing', title: 'Natural Language Processing: The Future of Communication' },
    ],
  },
  'ai-digital-marketing': {
    category: 'Business',
    tag: 'Digital Marketing',
    date: 'August 19, 2025',
    author: 'Riya Sharma',
    authorRole: 'Digital Strategy Director',
    readTime: '7 min read',
    title: 'How AI is Changing the Face of Digital Marketing',
    subtitle: 'Personalization at scale, predictive analytics, and intelligent automation are redefining how brands connect with customers.',
    heroIcon: 'gtn gtn-chat-light',
    intro: `Digital marketing has always been about reaching the right person with the right message at the right time. AI is making that goal not just achievable but scalable to billions of individual interactions simultaneously. From hyper-personalized content to predictive customer journeys, AI is the most powerful tool the marketing world has ever seen.`,
    sections: [
      {
        heading: 'Hyper-Personalization at Scale',
        icon: 'gtn gtn-team-1-light',
        content: `Modern consumers expect brands to understand their individual needs and preferences. AI makes this possible at scale. Recommendation engines like those powering Netflix and Spotify analyze viewing or listening history, contextual signals, and behavioral patterns to serve up content that keeps users engaged. E-commerce platforms use similar technology to show each shopper the products most likely to resonate, increasing conversion rates by up to 35%.`,
      },
      {
        heading: 'Predictive Analytics & Customer Journey',
        icon: 'gtn gtn-badge',
        content: `AI can predict what a customer will do next with remarkable accuracy. Churn prediction models identify at-risk customers before they leave, enabling proactive retention campaigns. Lead scoring algorithms prioritize sales outreach on prospects most likely to convert. Lifetime value prediction helps marketers allocate budget to the customer segments that will deliver the greatest long-term returns.`,
      },
      {
        heading: 'AI-Powered Content Creation',
        icon: 'gtn gtn-codesandbox-line',
        content: `Generative AI tools are transforming content production. Large language models can draft blog posts, social media captions, email subject lines, and ad copy in seconds. Image generation AI creates custom visuals for campaigns without expensive photoshoots. While human creativity and judgment remain essential, AI dramatically accelerates the content supply chain and enables rapid A/B testing of creative variants.`,
      },
      {
        heading: 'Conversational Marketing & Chatbots',
        icon: 'gtn gtn-chat-light',
        content: `AI-powered chatbots handle customer inquiries 24/7 with natural, contextually appropriate responses. They qualify leads, book appointments, process orders, and escalate complex issues to human agents — all without human intervention. When integrated with CRM systems, they build a comprehensive picture of each customer's history and preferences, enabling truly personalized conversations at every touchpoint.`,
      },
    ],
    keyTakeaways: [
      'AI personalization can increase e-commerce conversion by 35%',
      'Predictive analytics reduces customer churn proactively',
      'AI content tools accelerate production and enable rapid testing',
      'Chatbots provide 24/7 customer engagement at scale',
      'First-party data strategy is critical in the cookieless future',
    ],
    related: [
      { slug: 'transforming-industries-ai', title: 'Transforming Industries and Changing Lives with AI' },
      { slug: 'ethics-of-ai-robotics', title: 'Exploring the Ethics of AI and Robotics in Society' },
      { slug: 'natural-language-processing', title: 'Natural Language Processing: The Future of Communication' },
    ],
  },
  'natural-language-processing': {
    category: 'Insight',
    tag: 'AI',
    date: 'August 19, 2025',
    author: 'Dr. Karan Verma',
    authorRole: 'NLP Research Scientist',
    readTime: '9 min read',
    title: 'Natural Language Processing: The Future of Communication',
    subtitle: 'Teaching machines to understand human language is unlocking new possibilities across healthcare, business, and creative fields.',
    heroIcon: 'gtn gtn-codepen-line',
    intro: `Language is the most fundamental tool of human civilization. It is how we share knowledge, forge relationships, and pass culture from generation to generation. Natural Language Processing — the branch of AI dedicated to teaching computers to understand and generate human language — is poised to be one of the most transformative technologies in history.`,
    sections: [
      {
        heading: 'How NLP Works: From Words to Understanding',
        icon: 'gtn gtn-codesandbox-line',
        content: `Modern NLP systems are built on transformer architectures — neural networks that process entire sequences of text simultaneously rather than word by word. Models like GPT-4, BERT, and their successors are trained on vast corpora of human-written text, learning the statistical relationships between words, phrases, and concepts. The result is systems that can answer questions, summarize documents, translate languages, and generate coherent prose with remarkable fluency.`,
      },
      {
        heading: 'Real-World Applications Transforming Industries',
        icon: 'gtn gtn-idea_generate-light',
        content: `NLP is already embedded in tools we use every day. Email clients use it to filter spam and suggest quick replies. Search engines use it to understand query intent rather than just matching keywords. Virtual assistants like Siri and Alexa use it to parse spoken commands. In healthcare, NLP extracts structured data from clinical notes, enabling population health analytics. In law, it reviews contracts and identifies risk clauses in minutes rather than weeks.`,
      },
      {
        heading: 'Multilingual AI: Breaking Language Barriers',
        icon: 'gtn gtn-chat-light',
        content: `One of the most exciting frontiers in NLP is multilingual and cross-lingual understanding. Large multilingual models can now translate between hundreds of language pairs with near-human accuracy. Low-resource languages that previously had no digital NLP tools are gaining access to spell-checkers, translation services, and voice assistants. This is democratizing access to information and digital services for billions of people who don't speak dominant world languages.`,
      },
      {
        heading: 'The Road Ahead: Challenges & Opportunities',
        icon: 'gtn gtn-badge',
        content: `Despite remarkable progress, significant challenges remain. Language models can "hallucinate" — generating plausible-sounding but factually incorrect information. They struggle with nuanced understanding, sarcasm, and culturally specific references. Bias in training data can lead to harmful outputs. Researchers are actively developing techniques to improve factual accuracy, reduce bias, and enable models to reason more reliably. The next decade of NLP progress will be extraordinary.`,
      },
    ],
    keyTakeaways: [
      'Transformer models have revolutionized NLP capabilities',
      'NLP is embedded in healthcare, law, search, and assistants',
      'Multilingual models are breaking down language barriers',
      'Hallucination and bias remain critical research challenges',
      'Human-AI language collaboration is the near-term future',
    ],
    related: [
      { slug: 'transforming-industries-ai', title: 'Transforming Industries and Changing Lives with AI' },
      { slug: 'ethics-of-ai-robotics', title: 'Exploring the Ethics of AI and Robotics in Society' },
      { slug: 'ai-digital-marketing', title: 'How AI is Changing the Face of Digital Marketing' },
    ],
  },
  'future-of-robotics': {
    category: 'Technology',
    tag: 'Robotics',
    date: 'August 19, 2025',
    author: 'Aditya Rajan',
    authorRole: 'Robotics Engineer',
    readTime: '11 min read',
    title: 'The Future of Robotics: Beyond the Factory Floor',
    subtitle: 'Collaborative robots, surgical bots, and autonomous drones are taking robotics out of factories and into everyday life.',
    heroIcon: 'gtn gtn-crane-2-light',
    intro: `For decades, industrial robots were confined to the factory floor — bolted to the ground, caged for safety, performing the same repetitive tasks endlessly. That era is over. The next generation of robotics is mobile, collaborative, and intelligent. Robots are moving into hospitals, warehouses, homes, disaster zones, and outer space.`,
    sections: [
      {
        heading: 'Collaborative Robots (Cobots)',
        icon: 'gtn gtn-team-1-light',
        content: `Traditional industrial robots are dangerous to work near — they operate at high speeds with no awareness of human presence. Cobots are different. Equipped with sensitive force-torque sensors, computer vision, and machine learning, they can work alongside humans safely. A cobot might handle the heavy lifting while a human handles fine detail work, or assist a surgeon with steady hands during a delicate procedure. The cobot market is projected to reach $12 billion by 2030.`,
      },
      {
        heading: 'Surgical Robotics & Medical Applications',
        icon: 'gtn gtn-Computer-light',
        content: `Robotic surgery systems like the da Vinci Surgical System allow surgeons to perform minimally invasive procedures with superhuman precision. Robotic arms translate the surgeon's hand movements into micro-scale motions, eliminating tremor and enabling incisions impossible with conventional instruments. AI-guided surgical robots are beginning to perform certain standardized procedures semi-autonomously, with the potential to dramatically expand access to high-quality surgery in underserved regions.`,
      },
      {
        heading: 'Autonomous Drones & Aerial Robots',
        icon: 'gtn gtn-idea_generate-light',
        content: `Drone technology has evolved from remote-controlled hobbyist toys to sophisticated autonomous systems with real-world applications. Delivery drones are beginning commercial operations in select markets. Agricultural drones spray crops with precision, eliminating the need for heavy ground vehicles. Search-and-rescue drones navigate disaster sites too dangerous for human responders. Military surveillance drones operate for days at high altitudes, gathering intelligence without risking human lives.`,
      },
      {
        heading: 'Humanoid Robots: The Next Frontier',
        icon: 'gtn gtn-badge',
        content: `Companies like Boston Dynamics, Tesla, and Figure AI are developing humanoid robots capable of navigating human environments — climbing stairs, opening doors, handling diverse objects. Unlike task-specific industrial robots, humanoids aim to be general-purpose platforms that can be reprogrammed for different jobs. While still in early development, humanoid robots have the potential to address labor shortages in warehousing, construction, elderly care, and household assistance within this decade.`,
      },
    ],
    keyTakeaways: [
      'Cobot market projected at $12B by 2030',
      'Surgical robots enable minimally invasive micro-precision procedures',
      'Delivery and agricultural drones are entering commercial operation',
      'Humanoid robots aim for general-purpose capability',
      'Human-robot collaboration is the dominant paradigm',
    ],
    related: [
      { slug: 'transforming-industries-ai', title: 'Transforming Industries and Changing Lives with AI' },
      { slug: 'ethics-of-ai-robotics', title: 'Exploring the Ethics of AI and Robotics in Society' },
      { slug: 'natural-language-processing', title: 'Natural Language Processing: The Future of Communication' },
    ],
  },
  'machine-learning-business': {
    category: 'Business',
    tag: 'AI',
    date: 'August 19, 2025',
    author: 'Priya Nair',
    authorRole: 'Business Intelligence Analyst',
    readTime: '6 min read',
    title: 'Machine Learning: The Competitive Edge Every Business Needs',
    subtitle: 'Companies that harness ML today are building an insurmountable advantage over those that wait.',
    heroIcon: 'gtn gtn-codesandbox-line',
    intro: `Machine learning is no longer just a technology buzzword — it is a fundamental competitive differentiator. Companies that have successfully integrated ML into their operations are making faster decisions, serving customers better, and operating more efficiently than their peers. The gap is widening every day.`,
    sections: [
      {
        heading: 'Demand Forecasting & Supply Chain',
        icon: 'gtn gtn-crane-2-light',
        content: `Retail giants like Amazon and Walmart use ML-powered demand forecasting to predict what products will be needed where and when — months in advance. This reduces overstock, eliminates stockouts, and optimizes logistics routing, saving billions. Even mid-sized retailers are now accessing cloud-based ML forecasting tools that were previously available only to tech giants. The result is leaner inventories and happier customers.`,
      },
      {
        heading: 'Customer Segmentation & Retention',
        icon: 'gtn gtn-team-1-light',
        content: `Traditional customer segmentation divides buyers into broad demographic buckets. ML-powered segmentation identifies micro-segments based on hundreds of behavioral signals — purchase history, browsing patterns, support interactions, social media activity. This enables marketing campaigns with dramatically higher relevance and conversion. Combined with churn prediction models, businesses can identify at-risk customers weeks in advance and intervene with personalized retention offers.`,
      },
      {
        heading: 'Operational Efficiency & Automation',
        icon: 'gtn gtn-codesandbox-line',
        content: `ML is automating knowledge work as well as physical labor. Document processing bots can extract, classify, and route information from invoices, contracts, and forms with 95%+ accuracy. ML-powered quality control systems inspect manufactured goods faster and more consistently than human inspectors. Energy management systems optimize building HVAC and lighting in real time, cutting utility costs by 20-30%. The cumulative efficiency gains transform business economics.`,
      },
      {
        heading: 'Getting Started: A Practical Roadmap',
        icon: 'gtn gtn-badge',
        content: `The biggest barrier to ML adoption is not technology — it is organizational readiness. Start by identifying specific, high-value business problems with clear metrics. Ensure you have clean, accessible data relevant to those problems. Start with proven, pre-built ML solutions before investing in custom model development. Build internal ML literacy through training and hiring. Most importantly, establish an iterative approach — deploy, measure, and improve continuously.`,
      },
    ],
    keyTakeaways: [
      'ML demand forecasting reduces inventory costs by 20-30%',
      'Micro-segmentation delivers dramatically higher campaign ROI',
      'Document automation achieves 95%+ accuracy',
      'Energy ML cuts utility costs by 20-30%',
      'Organizational readiness is the biggest barrier to ML adoption',
    ],
    related: [
      { slug: 'transforming-industries-ai', title: 'Transforming Industries and Changing Lives with AI' },
      { slug: 'ai-digital-marketing', title: 'How AI is Changing the Face of Digital Marketing' },
      { slug: 'natural-language-processing', title: 'Natural Language Processing: The Future of Communication' },
    ],
  },
};

export default function BlogDetail() {
  const { blogSlug } = useParams();
  const post = blogData[blogSlug];

  if (!post) {
    return (
      <div className="svc-not-found">
        <div className="svc-icon-wrap">
          <i className="gtn gtn-chat-light"></i>
        </div>
        <h2>Article Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="svc-back-btn">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="svc-detail-page blog-detail-page">

      {/* ── HERO ── */}
      <section className="svc-hero blog-hero">
        <div className="svc-hero-bg-grid"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-inner">
          <div className="svc-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <Link to="/blog">Blog</Link>
            <span className="svc-breadcrumb-sep">›</span>
            <span>{post.category}</span>
          </div>

          <div className="blog-meta-row">
            <span className="blog-category-badge">{post.category}</span>
            <span className="blog-tag-badge">#{post.tag}</span>
          </div>

          <h1 className="svc-hero-title">{post.title}</h1>
          <p className="svc-hero-subtitle">{post.subtitle}</p>

          <div className="blog-author-bar">
            <div className="blog-author-avatar">
              <i className={post.heroIcon}></i>
            </div>
            <div className="blog-author-info">
              <strong>{post.author}</strong>
              <span>{post.authorRole}</span>
            </div>
            <div className="blog-post-meta">
              <span><i className="fas fa-calendar"></i> {post.date}</span>
              <span><i className="fas fa-clock"></i> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="blog-body-section">
        <div className="blog-body-inner">

          <div className="blog-main-content">
            {/* Intro */}
            <div className="blog-intro-block">
              <p className="blog-intro-text">{post.intro}</p>
            </div>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <div key={i} className="blog-section-block">
                <div className="blog-section-header">
                  <div className="blog-section-icon">
                    <i className={section.icon}></i>
                  </div>
                  <h2 className="blog-section-title">{section.heading}</h2>
                </div>
                <p className="blog-section-body">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">

            {/* Key Takeaways */}
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-card-title">
                <i className="gtn gtn-badge"></i> Key Takeaways
              </div>
              <ul className="blog-takeaways-list">
                {post.keyTakeaways.map((pt, i) => (
                  <li key={i}>
                    <span className="svc-check">✔</span> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Card */}
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-card-title">
                <i className="gtn gtn-team-1-light"></i> About the Author
              </div>
              <div className="blog-author-card">
                <div className="blog-author-avatar large">
                  <i className={post.heroIcon}></i>
                </div>
                <strong>{post.author}</strong>
                <span>{post.authorRole}</span>
                <p>Expert in AI research and emerging technologies with over 10 years of industry experience.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="blog-sidebar-cta">
              <div className="svc-hero-glow"></div>
              <h4>Ready to implement AI in your business?</h4>
              <p>Our team of experts is ready to help you get started.</p>
              <Link to="/contact" className="svc-btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
                Talk to an Expert
              </Link>
            </div>

          </aside>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="svc-related-section">
        <div className="svc-related-inner">
          <div className="svc-section-tag">Keep Reading</div>
          <h2 className="svc-section-title">
            Related <span className="svc-cyan">Articles</span>
          </h2>
          <div className="svc-related-grid">
            {post.related.map((rel) => {
              const relPost = blogData[rel.slug];
              return (
                <div key={rel.slug} className="svc-related-card">
                  <div className="blog-related-category">{relPost?.category || 'AI'}</div>
                  <div className="svc-related-icon">
                    <i className={relPost?.heroIcon || 'gtn gtn-chat-light'}></i>
                  </div>
                  <h4 className="svc-related-title">{rel.title}</h4>
                  <p className="svc-related-desc">{relPost?.readTime} · {relPost?.author}</p>
                  <Link to={`/blog/${rel.slug}`} className="svc-related-link">
                    Read Article <span>→</span>
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
            Want to Stay Updated on <span className="svc-cyan">AI & Robotics?</span>
          </h2>
          <p className="svc-cta-desc">
            Explore all our articles, insights, and research from the frontlines of AI innovation.
          </p>
          <div className="svc-cta-actions">
            <Link to="/blog" className="svc-btn-primary">View All Articles</Link>
            <Link to="/contact" className="svc-btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
