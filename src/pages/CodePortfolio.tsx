import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Sparkles, Star, GitBranch, ExternalLink, Terminal, Coffee } from 'lucide-react';
import '../App.css';
import '../Portfolio.css';

function CodePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const projects = [
    {
      id: 1,
      title: 'AI Agent Orchestration System',
      category: 'AI/ML',
      description: 'Multi-agent orchestration engine coordinating 5+ specialized AI agents for conversational commerce. Built with Python, LangChain, and FastAPI.',
      tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL'],
      features: [
        'Agent coordination with state management',
        'LLM integration with context retention',
        'RESTful API with async processing',
        'Real-time WebSocket connections'
      ],
      emoji: '🤖',
      color: '#C8A2C8',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'Python', lines: '~5K' }
    },
    {
      id: 2,
      title: 'Supply Chain Risk Analyzer',
      category: 'Data Science',
      description: 'Predictive analytics platform for supplier risk assessment. XGBoost model with 85%+ accuracy, integrated with 20+ external APIs.',
      tech: ['Python', 'XGBoost', 'Pandas', 'Dash Plotly'],
      features: [
        'Real-time risk scoring algorithms',
        'Interactive data visualization dashboards',
        'API integration framework',
        'Automated anomaly detection'
      ],
      emoji: '📊',
      color: '#A8C9C3',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'Python', lines: '~8K' }
    },
    {
      id: 3,
      title: 'NLP Data Redaction Tool',
      category: 'NLP',
      description: 'Privacy-first text processing system using NLP to automatically redact sensitive information from documents. Saved $6.4M in manual processing costs.',
      tech: ['Python', 'spaCy', 'NLTK', 'Flask'],
      features: [
        'Named entity recognition (NER)',
        'Custom regex patterns for PII',
        'Batch processing pipeline',
        'Audit trail and compliance logging'
      ],
      emoji: '🔒',
      color: '#D4A5A5',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'Python', lines: '~3K' }
    },
    {
      id: 4,
      title: 'Clinical Trial Predictor',
      category: 'Machine Learning',
      description: 'Predictive model optimizing pharmaceutical trial timelines. Features XGBoost regression with 85% accuracy and interactive Shiny dashboard.',
      tech: ['R', 'XGBoost', 'Shiny', 'tidyverse'],
      features: [
        'Time series forecasting',
        'Feature engineering pipeline',
        'Interactive R-Shiny dashboard',
        'Model explainability with SHAP'
      ],
      emoji: '🧬',
      color: '#F5D5CB',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'R', lines: '~4K' }
    },
    {
      id: 5,
      title: 'Financial Anomaly Detector',
      category: 'Data Viz',
      description: 'Real-time financial spend monitoring with anomaly detection. Built with Dash Plotly for interactive visualizations and alerts.',
      tech: ['Python', 'Dash Plotly', 'Pandas', 'scikit-learn'],
      features: [
        'Real-time streaming data processing',
        'Statistical anomaly detection',
        'Interactive drill-down charts',
        'Automated alert system'
      ],
      emoji: '💰',
      color: '#E6D5E8',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'Python', lines: '~2.5K' }
    },
    {
      id: 6,
      title: 'Meeting Transcription App',
      category: 'Full-Stack',
      description: 'Voice-to-text meeting assistant with speaker diarization and action item extraction. React frontend with Python backend.',
      tech: ['React', 'Python', 'Whisper AI', 'FastAPI'],
      features: [
        'Real-time audio transcription',
        'Speaker identification',
        'Action item extraction with NLP',
        'Meeting summary generation'
      ],
      emoji: '🎙️',
      color: '#B8A9C9',
      github: 'https://github.com/nithyapriya18',
      demo: null,
      stats: { stars: 0, language: 'TypeScript', lines: '~6K' }
    }
  ];

  const categories = ['all', 'AI/ML', 'Data Science', 'NLP', 'Machine Learning', 'Data Viz', 'Full-Stack'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="app portfolio-page">
      {/* Navigation */}
      <nav className="nav scrolled">
        <div className="nav-container">
          <a href="/" className="logo">NPV</a>
          
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/design">Design</a></li>
            <li><a href="/code" className="active">Code</a></li>
            <li><a href="/#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero code-hero">
        <div className="hero-decoration"></div>
        <div className="container">
          <div className="portfolio-hero-content">
            <div className="quirky-badge">
              <Terminal size={20} />
              <span>Code Portfolio</span>
              <Coffee size={16} />
            </div>
            <h1 className="portfolio-hero-title">
              Product Manager<br/>
              <span className="gradient-text">Who Codes</span>
            </h1>
            <p className="portfolio-hero-description">
              From Python scripts to full-stack applications, I bridge the gap between product vision 
              and technical execution. Because the best PMs understand how things actually work.
            </p>
            <div className="code-stats-grid">
              <div className="code-stat">
                <Code size={24} />
                <div>
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="code-stat">
                <GitBranch size={24} />
                <div>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Commits</span>
                </div>
              </div>
              <div className="code-stat">
                <Coffee size={24} />
                <div>
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Coffees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="code-projects-section">
        <div className="container">
          <div className="code-projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="code-project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header" style={{ backgroundColor: project.color }}>
                  <span className="project-emoji">{project.emoji}</span>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <div className="project-stats-mini">
                      <span><Star size={14} /> {project.stats.stars}</span>
                      <span>{project.stats.language}</span>
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-footer">
                    <div className="project-stat">
                      <Code size={16} />
                      <span>{project.stats.lines} lines</span>
                    </div>
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Tech Stack & Tools</h2>
          <p className="section-subtitle">Technologies I work with regularly</p>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Languages</h3>
              <div className="tech-items">
                {['Python', 'R', 'JavaScript', 'TypeScript', 'SQL'].map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-icon">💻</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Frameworks & Libraries</h3>
              <div className="tech-items">
                {['React', 'FastAPI', 'Flask', 'LangChain', 'Pandas', 'scikit-learn'].map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-icon">🛠️</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Data & ML</h3>
              <div className="tech-items">
                {['XGBoost', 'TensorFlow', 'spaCy', 'NLTK', 'Dash Plotly', 'Power BI'].map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-icon">🤖</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Tools & Platforms</h3>
              <div className="tech-items">
                {['Git', 'Docker', 'PostgreSQL', 'AWS', 'Vercel', 'VS Code'].map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-icon">⚙️</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="github-cta-section">
        <div className="container">
          <div className="github-cta-box">
            <Github size={60} />
            <h2>Explore More on GitHub</h2>
            <p>
              Check out my repositories, contributions, and open-source work. 
              Always learning, always building.
            </p>
            <a 
              href="https://github.com/nithyapriya18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Github size={20} />
              Visit My GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Let's Build Something Together</h2>
            <p>Got a product idea that needs both strategic thinking and technical chops?</p>
            <div className="cta-buttons">
              <a href="mailto:nithya.v@outlook.com" className="btn btn-primary">
                <Mail size={20} />
                Get in Touch
              </a>
              <a href="/" className="btn btn-secondary">
                View All Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/design">Design</a>
              <a href="/code">Code</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/npv" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/nithyapriya18" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="mailto:nithya.v@outlook.com">
                <Mail size={20} />
              </a>
            </div>
            <p>&copy; 2024 Nithyapriya Veeraraghavan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CodePortfolio;