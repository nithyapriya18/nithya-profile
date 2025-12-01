import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Palette, Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';
import '../App.css';
import '../Portfolio.css';

function DesignPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const designs = [
    {
      id: 1,
      title: 'Multi-Agent Shopping Interface',
      category: 'Product Design',
      description: 'Conversational AI shopping assistant interface with dynamic agent coordination. Features include voice integration, visual search, and personalized recommendations.',
      tools: ['Figma', 'Prototyping', 'User Research'],
      color: '#C8A2C8',
      emoji: '🛍️',
      details: 'Created comprehensive user flows for 5+ specialized AI agents working together to provide personalized shopping experiences.',
      placeholder: true
    },
    {
      id: 2,
      title: 'Supply Chain Risk Dashboard',
      category: 'Enterprise SaaS',
      description: 'Data visualization dashboard for 500K+ users tracking supplier risks in real-time. Complex information architecture with intuitive navigation.',
      tools: ['Figma', 'Data Viz', 'UI Design'],
      color: '#A8C9C3',
      emoji: '📊',
      details: 'Designed risk scoring modules with 20+ API integrations, focusing on clarity and actionable insights.',
      placeholder: true
    },
    {
      id: 3,
      title: 'Generative AI Content Platform',
      category: 'AI Product',
      description: 'Content management interface powered by generative AI. Streamlined workflows reducing manual effort by 50%.',
      tools: ['Figma', 'Wireframing', 'UX Design'],
      color: '#D4A5A5',
      emoji: '✨',
      details: 'Led design from concept to production, collaborating with data science teams to make AI capabilities accessible.',
      placeholder: true
    },
    {
      id: 4,
      title: 'Clinical Trial Analytics',
      category: 'Healthcare',
      description: 'Interactive dashboard for pharmaceutical operations with predictive analytics and complex data visualization.',
      tools: ['Figma', 'Prototyping', 'Research'],
      color: '#F5D5CB',
      emoji: '🧬',
      details: 'Designed interfaces for XGBoost models achieving 85% accuracy in trial timeline predictions.',
      placeholder: true
    },
    {
      id: 5,
      title: 'Mobile AI Assistant',
      category: 'Mobile Design',
      description: 'Voice-first mobile interface for AI shopping assistant with gesture controls and seamless navigation.',
      tools: ['Figma', 'Mobile UI', 'Interaction Design'],
      color: '#E6D5E8',
      emoji: '📱',
      details: 'Optimized for one-handed use with micro-interactions and delightful animations.',
      placeholder: true
    },
    {
      id: 6,
      title: 'Design System Library',
      category: 'Design System',
      description: 'Comprehensive design system with reusable components, color palettes, and design tokens for consistency.',
      tools: ['Figma', 'Component Library', 'Documentation'],
      color: '#B8A9C9',
      emoji: '🎨',
      details: 'Created scalable component library used across multiple product teams and platforms.',
      placeholder: true
    }
  ];

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
            <li><a href="/design" className="active">Design</a></li>
            <li><a href="/code">Code</a></li>
            <li><a href="/#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-decoration"></div>
        <div className="container">
          <div className="portfolio-hero-content">
            <div className="quirky-badge">
              <Palette size={20} />
              <span>Design Portfolio</span>
              <Sparkles size={16} />
            </div>
            <h1 className="portfolio-hero-title">
              Where Product Meets<br/>
              <span className="gradient-text">Beautiful Design</span>
            </h1>
            <p className="portfolio-hero-description">
              From wireframes to production-ready interfaces, here's a peek into my design process. 
              Each project tells a story of user research, iteration, and thoughtful craft.
            </p>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Design Projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Users Reached</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Iterations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Grid */}
      <section className="design-grid-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Featured Designs</h2>
            <p className="section-subtitle">
              A collection of UI/UX work from enterprise SaaS to AI-powered platforms
            </p>
          </div>

          <div className="designs-grid">
            {designs.map((design, index) => (
              <div 
                key={design.id} 
                className="design-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedDesign(design.id)}
              >
                <div className="design-card-header" style={{ backgroundColor: design.color }}>
                  <span className="design-emoji">{design.emoji}</span>
                  <div className="design-category">{design.category}</div>
                </div>
                
                <div className="design-card-body">
                  <h3>{design.title}</h3>
                  <p>{design.description}</p>
                  
                  <div className="design-tools">
                    {design.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>

                  {design.placeholder && (
                    <div className="design-placeholder-area">
                      <div className="placeholder-icon">
                        <Palette size={32} />
                      </div>
                      <p className="placeholder-text">Add your Figma design here</p>
                      <p className="placeholder-hint">Export your design and replace this placeholder</p>
                    </div>
                  )}

                  <button className="view-design-btn">
                    <span>View Design</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Your Own Section */}
          <div className="add-design-cta">
            <div className="cta-content">
              <Sparkles size={40} className="cta-icon" />
              <h3>Ready to Add Your Designs?</h3>
              <p>
                Replace the placeholders above with your actual Figma designs. 
                Export at 2x resolution for crisp displays!
              </p>
              <div className="cta-tips">
                <div className="tip">📐 Export at 1600x1200px</div>
                <div className="tip">🎨 Use PNG for transparency</div>
                <div className="tip">✨ Add hover states for interaction</div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="design-process">
            <h2 className="section-title">My Design Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h4>Research & Discovery</h4>
                <p>User interviews, competitive analysis, and stakeholder alignment to understand the problem deeply.</p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h4>Ideation & Wireframes</h4>
                <p>Rapid sketching, low-fidelity wireframes, and exploring multiple solutions before committing.</p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h4>High-Fidelity Design</h4>
                <p>Creating polished mockups in Figma with attention to typography, color, and micro-interactions.</p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h4>Testing & Iteration</h4>
                <p>Usability testing with real users, gathering feedback, and refining until it's just right.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="tools-section">
        <div className="container">
          <h2 className="section-title">Design Tools I Love</h2>
          <div className="tools-grid">
            {[
              { name: 'Figma', emoji: '🎨', description: 'Primary design tool for UI/UX' },
              { name: 'Balsamiq', emoji: '✏️', description: 'Quick wireframing & mockups' },
              { name: 'Power BI', emoji: '📊', description: 'Data visualization & dashboards' },
              { name: 'User Testing', emoji: '👥', description: 'Feedback & iteration' },
              { name: 'Design Systems', emoji: '🧩', description: 'Component libraries & consistency' },
              { name: 'Prototyping', emoji: '⚡', description: 'Interactive demos & flows' }
            ].map((tool, index) => (
              <div key={index} className="tool-card">
                <span className="tool-emoji">{tool.emoji}</span>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Let's Create Something Beautiful</h2>
            <p>Interested in collaborating on a design project or discussing product strategy?</p>
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

export default DesignPortfolio;