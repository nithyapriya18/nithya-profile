import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Award,
  Briefcase,
  Code,
  Palette,
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'design',
        'code',
        'skills',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            NPV
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {[
              'Home',
              'About',
              'Experience',
              'Projects',
              'Design',
              'Code',
              'Skills',
              'Contact',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={
                    activeSection === item.toLowerCase() ? 'active' : ''
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-decoration"></div>
        <div className="hero-content">
          <div className="hero-badge">Senior Product Manager</div>
          <h1 className="hero-title">
            Nithyapriya
            <br />
            Veeraraghavan
          </h1>
          <p className="hero-subtitle">
            Product Leader | Dabbles in Design | Codes a Bit
          </p>
          <p className="hero-description">
            Holistic product leader who can sketch wireframes, write Python
            scripts, and drive AI-powered innovation. 10+ years building
            platforms serving 500K+ users - because the best PMs get their
            hands dirty!
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>
          <div className="hero-links">
            <a
              href="https://linkedin.com/in/npv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/nithyapriya18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a href="mailto:nithya.v@outlook.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <button
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content-full">
            <div className="about-text-full">
              <p className="lead">
                Senior Product Manager with 10+ years driving AI-powered
                innovation. But I'm not just a PM - I can mock up in Figma,
                hack together Python scripts, and lead end-to-end product
                development.
              </p>
              <p>
                My holistic approach means I can wireframe the interface,
                prototype the solution, write the PRD, build the MVP, and launch
                to market. I bridge the gap between design, engineering, and
                business - because I speak all three languages (well enough to
                be dangerous!).
              </p>
              <p>
                Currently Head of Product at Opura AI, architecting multi-agent
                systems while staying hands-on with Figma mockups and Python
                code. Certified Scrum Product Owner who believes the best product
                leaders understand both the vision AND the execution.
              </p>
            </div>
            <div className="about-stats-horizontal">
              <div className="stat-card-compact">
                <div className="stat-icon-compact">
                  <Briefcase size={24} />
                </div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card-compact">
                <div className="stat-icon-compact">
                  <Award size={24} />
                </div>
                <h3>500K+</h3>
                <p>Users Impacted</p>
              </div>
              <div className="stat-card-compact">
                <div className="stat-icon-compact">
                  <Code size={24} />
                </div>
                <h3>$6.4M</h3>
                <p>Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="timeline">
  {[
    {
  date: '2025 – Present',
  title: 'Head of Product (Founding Collaboration)',
  company: 'Opura AI',
  type: 'work',
  points: [
    'Led 0→1 product management for a multi‑agent orchestration (MAO) system coordinating 5+ specialized AI agents for personalized shopping experiences.',
    'Defined the product strategy and user experience, translating early concepts into user journeys and PRDs.',
    'Designed and prototyped end‑to‑end chatbot screens in Figma, creating fully clickable flows for core scenarios and edge cases.',
    'Set up lightweight agile rituals and workflows for a team of 8+ interns building an early-stage SaaS AI assistant platform',
    'Contributed to go-to-market assets including pitch decks, customer discovery interviews, and investor conversations',
  ],
},
              {
                date: 'Jun 2024 - Sept 2025',
                title: 'Senior Product Manager',
                company: 'Resilinc',
                type: 'work',
                points: [
                  'Led supplier data security enhancements for 500K+ global users, ensuring compliance and reducing risk exposure',
                  'Defined product vision and roadmap, delivering 3+ products end-to-end and boosting customer satisfaction by 25%',
                  'Built risk scoring modules with 20+ API integrations, increasing operational efficiency by 20%',
                  'Facilitated 30-member Supplier Advisory Board and contributed to REVA AI assistant development',
                ],
              },
              {
                date: 'April 2023',
                title: '👶 Welcomed Baby Boy',
                company: 'Personal Milestone',
                type: 'milestone',
                points: [
                  'Became a mother to a beautiful baby boy',
                  'Learning to balance career ambitions with motherhood',
                  'Discovering new dimensions of patience, love, and time management',
                ],
              },
              {
                date: 'Nov 2020 - Jun 2024',
                title: 'Senior Specialist - Products',
                company: 'Novartis',
                type: 'work',
                points: [
                  'Launched generative AI solutions for content management, reducing manual effort by 50% and costs by 25%',
                  'Led agile team delivering 4 validated AI/ML concepts per quarter with 75% adoption success',
                  'Developed data redaction tool using NLP, delivering $6.4M savings and improving data privacy by 30%',
                ],
              },
              {
                date: 'November 2020',
                title: '💍 Got Married',
                company: 'Personal Milestone',
                type: 'milestone',
                points: [
                  'Started a new chapter of life with my partner',
                  'Building a foundation of love, support, and shared dreams',
                  'Learning the art of partnership and teamwork beyond the office',
                ],
              },
              {
                date: 'Jun 2018 - Oct 2020',
                title: 'Data Scientist',
                company: 'Novartis',
                type: 'work',
                points: [
                  'Built interactive Dash Plotly dashboard to detect financial spend anomalies',
                  'Developed predictive XGBoost model optimizing clinical trial timelines with 85% accuracy',
                  'Created R-Shiny text mining app for document complexity analysis',
                ],
              },
              {
                date: 'Nov 2014 - Apr 2017',
                title: 'Software Engineer',
                company: 'Tech Mahindra Limited',
                type: 'work',
                points: [
                  'Developed automated test scripts improving QA coverage by 35%',
                  'Resolved 50+ critical defects using Agile, accelerating release velocity by 20%',
                  'Collaborated with cross-functional teams on software development lifecycle',
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  job.type === 'milestone' ? 'milestone' : ''
                }`}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{job.date}</span>
                  <h3>{job.title}</h3>
                  <h4>{job.company}</h4>
                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {[
              {
                number: '01',
                title: 'Multi-Agent AI Commerce Platform',
                description:
                  'Architected multi-agent orchestration system at Opura AI coordinating 5+ specialized AI agents for personalized shopping experiences. Led product development from ideation to wireframing with engineering on agentic workflows and LLM integration.',
                tags: [
                  'Multi-Agent AI',
                  'LLM Integration',
                  'Product Strategy',
                  'Agentic Workflows',
                ],
                impact: 'Early-stage SaaS platform with team of 8+ interns',
              },
              {
                number: '02',
                title: 'Supply Chain Intelligence Platform',
                description:
                  'Led supplier data security enhancements serving 500K+ global users at Resilinc with risk scoring modules and 20+ API integrations. Defined product vision and roadmap for enterprise SaaS platform.',
                tags: [
                  'Enterprise SaaS',
                  'Risk Management',
                  'API Integration',
                  'Data Security',
                ],
                impact:
                  '25% increase in customer satisfaction, 20% operational efficiency gain',
              },
              {
                number: '03',
                title: 'Generative AI Content Management',
                description:
                  'Launched AI-powered content management solutions at Novartis reducing manual effort by 50% and costs by 25%. Developed NLP-based data redaction tool improving data privacy and compliance.',
                tags: [
                  'Generative AI',
                  'Cost Optimization',
                  'Process Automation',
                  'NLP',
                ],
                impact: '$6.4M savings, 30% improved data privacy',
              },
              {
                number: '04',
                title: 'Predictive Analytics for Clinical Trials',
                description:
                  'Developed XGBoost predictive model optimizing clinical trial timelines with 85% accuracy. Built interactive Dash Plotly dashboard for financial spend anomaly detection ensuring compliance.',
                tags: [
                  'Machine Learning',
                  'Healthcare AI',
                  'Predictive Modeling',
                  'Data Visualization',
                ],
                impact: 'Accelerated time-to-market for pharmaceutical products',
              },
            ].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-number">{project.number}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="design" className="design">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Design Work</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">
              Wireframes, mockups, and user flows I've created in Figma
            </p>
          </div>
          <div className="design-showcase">
            <div className="design-intro">
              <div className="design-icon">🎨</div>
              <h3>PM Who Loves Figma</h3>
              <p>
                I may not be a pro designer, but I can wireframe my ideas and
                create mockups good enough to communicate the vision. Here's my
                Figma playground!
              </p>
            </div>

            <div className="design-grid">
              {[
                {
                  title: 'Multi-Agent AI Dashboard',
                  description:
                    'Conversational commerce interface with agent orchestration visualization',
                  tools: 'Figma, Prototyping',
                  category: 'AI Product',
                },
                {
                  title: 'Supply Chain Risk Portal',
                  description:
                    'Enterprise dashboard for 500K+ users tracking supplier risks',
                  tools: 'Figma, User Research',
                  category: 'Enterprise SaaS',
                },
                {
                  title: 'Clinical Trial Analytics',
                  description:
                    'Data visualization for pharmaceutical operations',
                  tools: 'Figma, Wireframing',
                  category: 'Healthcare',
                },
                {
                  title: 'AI Content Platform',
                  description:
                    'Generative AI interface for content management',
                  tools: 'Figma, UX Design',
                  category: 'AI Product',
                },
              ].map((design, index) => (
                <div
                  key={index}
                  className="design-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="design-placeholder">
                    <div className="placeholder-icon">📐</div>
                    <p>Figma Design Placeholder</p>
                    <span className="placeholder-hint">
                      Add your wireframe screenshot here
                    </span>
                  </div>
                  <div className="design-info">
                    <span className="design-category">{design.category}</span>
                    <h4>{design.title}</h4>
                    <p>{design.description}</p>
                    <div className="design-meta">
                      <span>🛠️ {design.tools}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="code" className="code">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Code & Development</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">
              Python projects and technical implementations I've built
            </p>
          </div>
          <div className="code-showcase">
            <div className="code-intro">
              <div className="code-icon">💻</div>
              <h3>PM Who Codes (Sometimes!)</h3>
              <p>
                I can build prototypes, write Python scripts, and understand
                technical architecture enough to earn respect from engineers.
                Not production-ready, but good enough to prove concepts!
              </p>
              <div className="github-link">
                <a
                  href="https://github.com/nithyapriya18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={20} />
                  View My GitHub
                </a>
              </div>
            </div>

            <div className="code-grid">
              {[
                {
                  title: 'Multi-Agent Orchestration Engine',
                  description:
                    'Python-based agent coordination system using LangChain and FastAPI for AI commerce platform',
                  tech: ['Python', 'LangChain', 'FastAPI'],
                  impact: 'Coordinating 5+ specialized AI agents',
                  icon: '🤖',
                },
                {
                  title: 'NLP Data Redaction Tool',
                  description:
                    'Privacy-focused text processing using spaCy and NLTK for automated PII removal',
                  tech: ['Python', 'spaCy', 'NLTK'],
                  impact: '$6.4M cost savings delivered',
                  icon: '🔒',
                },
                {
                  title: 'Risk Scoring Module',
                  description:
                    'XGBoost predictive model with 20+ API integrations for supplier risk assessment',
                  tech: ['Python', 'XGBoost', 'APIs'],
                  impact: '20% operational efficiency gain',
                  icon: '📊',
                },
                {
                  title: 'Clinical Trial Predictor',
                  description:
                    'ML model optimizing pharmaceutical trial timelines with 85% accuracy',
                  tech: ['R', 'XGBoost', 'Shiny'],
                  impact: '85% prediction accuracy',
                  icon: '🧬',
                },
                {
                  title: 'Financial Anomaly Detector',
                  description:
                    'Real-time dashboard using Dash Plotly for spend monitoring and alerting',
                  tech: ['Python', 'Dash', 'Plotly'],
                  impact: 'Real-time compliance monitoring',
                  icon: '💰',
                },
                {
                  title: 'Meeting Transcription App',
                  description:
                    'Voice-to-text assistant with speaker diarization and action item extraction',
                  tech: ['React', 'Python', 'Whisper AI'],
                  impact: 'Automated meeting summaries',
                  icon: '🎙️',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="code-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="code-header">
                    <span className="code-emoji">{project.icon}</span>
                    <h4>{project.title}</h4>
                  </div>
                  <p className="code-description">{project.description}</p>
                  <div className="code-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="code-impact">
                    <strong>Impact:</strong> {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <Briefcase size={32} />
              </div>
              <h3>AI & Product</h3>
              <div className="skill-tags">
                <span className="skill-tag">Multi-Agent AI</span>
                <span className="skill-tag">Conversational AI</span>
                <span className="skill-tag">AI Roadmaps</span>
                <span className="skill-tag">Product Management</span>
                <span className="skill-tag">Product Strategy</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Code size={32} />
              </div>
              <h3>Technical</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python Programming</span>
                <span className="skill-tag">Predictive Modeling</span>
                <span className="skill-tag">Data-Driven Decision Making</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">NLP</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Palette size={32} />
              </div>
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Power BI</span>
                <span className="skill-tag">Balsamiq</span>
                <span className="skill-tag">Dash Plotly</span>
                <span className="skill-tag">R-Shiny</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Award size={32} />
              </div>
              <h3>Leadership</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile Scrum Certified</span>
                <span className="skill-tag">Stakeholder Management</span>
                <span className="skill-tag">Cross-functional Leadership</span>
                <span className="skill-tag">Team Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-intro">
                I'm always interested in discussing product strategy, AI
                innovation, and opportunities to build meaningful products. Feel
                free to reach out!
              </p>
              <div className="contact-details">
                <a href="mailto:nithya.v@outlook.com" className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>nithya.v@outlook.com</p>
                  </div>
                </a>
                <a href="tel:+918897464355" className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91-8897464355</p>
                  </div>
                </a>
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="contact-social">
                <a
                  href="https://linkedin.com/in/npv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nithyapriya18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Nithyapriya Veeraraghavan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
