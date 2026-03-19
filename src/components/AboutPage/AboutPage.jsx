import Awards from "./Awards";
import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";
import { motion } from "framer-motion";

const STATS = [
  { value: "1954", label: "Year Founded", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )},
  { value: "138+", label: "Products", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M18 10v4"/>
    </svg>
  )},
  { value: "9+", label: "Global Offices", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )},
  { value: "70+", label: "Years of Trust", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )},
];

function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="ab-hero">
        <div className="ab-hero__bg" aria-hidden="true">
          <div className="ab-hero__blob ab-hero__blob--1" />
          <div className="ab-hero__blob ab-hero__blob--2" />
          <div className="ab-hero__blob ab-hero__blob--3" />
          <div className="ab-hero__grid" />
        </div>

        <div className="container ab-hero__inner">
          {/* Centered headline */}
          <motion.div
            className="ab-hero__copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">About I-Com Systems</span>
            <h1 className="ab-hero__title">
              Storage Solutions<br />
              <span className="ab-hero__title-gradient">Built to Last</span>
            </h1>
            <p className="ab-hero__subtitle">
              Since 1954, I-Com has been engineering the hardware that the world relies on —
              from NVMe SSDs to enterprise-grade HDDs, shipped to professionals across 9 countries.
            </p>
          </motion.div>

          {/* Floating badge row */}
          <motion.div
            className="ab-hero__badges"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {["Crucial", "Seagate", "Samsung", "Western Digital", "Toshiba"].map((b, i) => (
              <span key={b} className="ab-badge" style={{ animationDelay: `${i * 0.4}s` }}>{b}</span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="ab-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {STATS.map((s, i) => (
              <div key={i} className="ab-stat">
                <span className="ab-stat__icon">{s.icon}</span>
                <span className="ab-stat__value">{s.value}</span>
                <span className="ab-stat__label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="ab-section ab-section--flush">
        <Awards />
      </section>

      {/* ── Company Story ── */}
      <section className="ab-section">
        <div className="container">
          <CompanyInfo />
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="ab-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Our Journey</span>
            <h2 className="section-heading">Milestones</h2>
          </motion.div>

          <div className="ab-timeline">
            {[
              { year: "1954", title: "Founded", desc: "Tokuzo Inoue establishes Icom in Osaka, Japan, focusing on radio communication hardware." },
              { year: "1980s", title: "Global Expansion", desc: "Branch offices open across the US, Canada, Australia, and Europe." },
              { year: "2000s", title: "Storage Era", desc: "Diversified into consumer and enterprise storage: SSDs, HDDs, and portable drives." },
              { year: "Today", title: "138+ Products", desc: "Offering a full catalog across brands including Crucial, Seagate, Samsung, and more." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="ab-timeline__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ab-timeline__marker">
                  <div className="ab-timeline__dot" />
                  {i < 3 && <div className="ab-timeline__line" />}
                </div>
                <div className="ab-timeline__content">
                  <span className="ab-timeline__year">{item.year}</span>
                  <h3 className="ab-timeline__title">{item.title}</h3>
                  <p className="ab-timeline__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="ab-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Our Team</span>
            <h2 className="section-heading">The People Behind I-Com</h2>
          </motion.div>
          <PersonalInfo />
        </div>
      </section>

      <style>{`
        .about-page {
          padding-bottom: var(--space-16);
        }

        /* ── Hero ── */
        .ab-hero {
          position: relative;
          padding: var(--space-24) 0 var(--space-16);
          overflow: hidden;
          text-align: center;
          background: var(--color-bg-base);
        }
        .ab-hero__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .ab-hero__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }
        .ab-hero__blob--1 {
          width: 700px; height: 500px;
          background: radial-gradient(circle, rgba(0,194,255,0.13) 0%, transparent 70%);
          top: -20%; left: 50%; transform: translateX(-50%);
        }
        .ab-hero__blob--2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%);
          bottom: 0; left: -5%;
        }
        .ab-hero__blob--3 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(255,149,0,0.07) 0%, transparent 70%);
          top: 10%; right: 5%;
        }
        .ab-hero__grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
        }
        .ab-hero__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-8);
        }
        .ab-hero__copy {
          max-width: 720px;
        }
        .ab-hero__title {
          font-family: var(--font-heading);
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          letter-spacing: var(--letter-spacing-tight);
          color: var(--color-text-primary);
          line-height: 1.1;
          margin: var(--space-3) 0 var(--space-5);
        }
        .ab-hero__title-gradient {
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, #a78bfa 50%, var(--color-accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ab-hero__subtitle {
          font-size: var(--text-base);
          color: var(--color-text-secondary);
          line-height: var(--line-height-loose);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Badge row */
        .ab-hero__badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
        }
        .ab-badge {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-medium);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
          color: var(--color-text-muted);
          padding: var(--space-2) var(--space-4);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-full);
          animation: badgePulse 4s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { border-color: var(--color-glass-border); }
          50% { border-color: rgba(0, 194, 255, 0.25); color: var(--color-text-secondary); }
        }

        /* Stats */
        .ab-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-1);
          width: 100%;
          max-width: 800px;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--glow-card);
        }
        .ab-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-1);
          padding: var(--space-6) var(--space-4);
          border-right: 1px solid var(--color-glass-border);
          transition: background var(--transition-fast);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: var(--color-bg-subtle); }
        .ab-stat__icon {
          color: var(--color-accent-primary);
          display: flex;
          margin-bottom: var(--space-1);
        }
        .ab-stat__value {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-accent-primary);
          line-height: 1;
        }
        .ab-stat__label {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }

        /* Sections */
        .ab-section { padding: var(--space-16) 0; border-top: 1px solid var(--color-glass-border); }
        .ab-section--flush { padding: 0; border-top: none; }

        /* Timeline */
        .ab-timeline {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2) var(--space-12);
          margin-top: var(--space-10);
          position: relative;
        }
        .ab-timeline__item {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-xl);
          transition: border-color var(--transition-base), box-shadow var(--transition-base);
        }
        .ab-timeline__item:hover {
          border-color: rgba(0,194,255,0.25);
          box-shadow: 0 0 0 1px rgba(0,194,255,0.08), var(--shadow-md);
        }
        .ab-timeline__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .ab-timeline__dot {
          width: 12px; height: 12px;
          border-radius: var(--radius-full);
          background: var(--color-accent-primary);
          box-shadow: 0 0 8px var(--color-accent-primary-glow);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .ab-timeline__line {
          width: 1px; flex: 1;
          background: linear-gradient(to bottom, var(--color-accent-primary), transparent);
          margin-top: var(--space-2);
          min-height: 20px;
        }
        .ab-timeline__content { display: flex; flex-direction: column; gap: var(--space-1); }
        .ab-timeline__year {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-medium);
          color: var(--color-accent-primary);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }
        .ab-timeline__title {
          font-family: var(--font-heading);
          font-size: var(--text-md);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
        }
        .ab-timeline__desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--line-height-loose);
        }

        @media (max-width: 768px) {
          .ab-hero { padding: var(--space-16) 0 var(--space-10); }
          .ab-hero__title { font-size: var(--text-2xl); }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
          .ab-stat:nth-child(2) { border-right: none; }
          .ab-stat:nth-child(1),
          .ab-stat:nth-child(2) { border-bottom: 1px solid var(--color-glass-border); }
          .ab-timeline { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
