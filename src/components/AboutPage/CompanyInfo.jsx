import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    label: "Headquarters",
    value: "Osaka, Japan",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: "#00c2ff",
  },
  {
    label: "Industries Served",
    value: "Maritime, Aviation, Land Mobile, Amateur Radio",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M18 10v4"/>
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    label: "Founded By",
    value: "Tokuzo Inoue",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    color: "#ff9500",
  },
  {
    label: "Catalog",
    value: "138+ storage products",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    color: "#00d68f",
  },
];

function CompanyInfo() {
  return (
    <motion.div
      className="ci-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent bar */}
      <div className="ci-card__accent-bar" />

      <div className="ci-card__body">
        {/* Left: story */}
        <div className="ci-card__story">
          <span className="section-label">Our Story</span>
          <h2 className="ci-card__heading">About I-Com Systems</h2>
          <p className="ci-card__text">
            Icom Inc. (アイコム株式会社) is a Japanese manufacturer of radio transmitting and
            receiving equipment, founded in 1954 by Tokuzo Inoue. For over 70 years, Icom
            has engineered world-class communication hardware trusted by pilots, mariners,
            and professionals across the globe.
          </p>
          <p className="ci-card__text">
            Headquartered in Osaka, Japan, Icom operates branch offices across the United
            States, Canada, Australia, New Zealand, the United Kingdom, France, Germany,
            Spain, and China — delivering reliable storage and communication solutions worldwide.
          </p>

          {/* Office locations strip */}
          <div className="ci-card__locations">
            {["Japan", "USA", "Canada", "Australia", "UK", "Germany", "France", "Spain", "China"].map(loc => (
              <span key={loc} className="ci-location-chip">{loc}</span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="ci-card__divider" />

        {/* Right: highlights */}
        <div className="ci-card__highlights">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={i}
              className="ci-highlight"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="ci-highlight__icon" style={{ color: h.color, background: h.color + "18" }}>
                {h.icon}
              </span>
              <div className="ci-highlight__text">
                <span className="ci-highlight__label">{h.label}</span>
                <span className="ci-highlight__value">{h.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ci-card {
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-2xl);
          box-shadow: var(--glow-card);
          overflow: hidden;
          position: relative;
        }
        .ci-card__accent-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent-primary) 0%, #a78bfa 50%, var(--color-accent-secondary) 100%);
        }
        .ci-card__body {
          display: grid;
          grid-template-columns: 1fr 2px 280px;
          gap: var(--space-10);
          padding: var(--space-10) var(--space-10);
          align-items: start;
        }
        .ci-card__story {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .ci-card__heading {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
          letter-spacing: var(--letter-spacing-tight);
        }
        .ci-card__text {
          font-size: var(--text-sm);
          line-height: var(--line-height-loose);
          color: var(--color-text-secondary);
        }
        .ci-card__locations {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-top: var(--space-2);
        }
        .ci-location-chip {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          padding: 3px var(--space-3);
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-full);
        }
        .ci-card__divider {
          background: var(--color-glass-border);
          align-self: stretch;
        }
        .ci-card__highlights {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding-top: var(--space-8);
        }
        .ci-highlight {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--color-bg-overlay);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-lg);
          transition: border-color var(--transition-fast), background var(--transition-fast);
        }
        .ci-highlight:hover {
          background: var(--color-bg-subtle);
          border-color: rgba(0,194,255,0.2);
        }
        .ci-highlight__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px; height: 32px;
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }
        .ci-highlight__text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ci-highlight__label {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }
        .ci-highlight__value {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-primary);
          line-height: 1.3;
        }
        @media (max-width: 900px) {
          .ci-card__body { grid-template-columns: 1fr; gap: var(--space-6); padding: var(--space-8); }
          .ci-card__divider { height: 1px; width: auto; }
          .ci-card__highlights { flex-direction: row; flex-wrap: wrap; padding-top: 0; }
          .ci-highlight { flex: 1; min-width: 200px; }
        }
      `}</style>
    </motion.div>
  );
}

export default CompanyInfo;
