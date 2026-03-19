import { motion } from "framer-motion";
import "./FeaturesStrip.css";

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Blazing-Fast SSDs",
    desc: "NVMe and SATA solid-state drives delivering sequential reads up to 7,300 MB/s. Zero compromise on speed.",
    accent: "blue",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Enterprise Reliability",
    desc: "HDDs with 24/7 operation support, MTBF ratings over 1 million hours, and built-in vibration control.",
    accent: "amber",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Top-Tier Brands Only",
    desc: "Exclusively stocking Crucial and Seagate — industry leaders with decades of proven innovation.",
    accent: "purple",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Every Form Factor",
    desc: "M.2, 2.5\", 3.5\", and portable — internal and external options for desktops, laptops, and NAS.",
    accent: "green",
  },
];

const ACCENT_COLORS = {
  blue:   { text: "var(--color-accent-primary)", bg: "rgba(0,194,255,0.1)", border: "rgba(0,194,255,0.2)" },
  amber:  { text: "var(--color-accent-secondary)", bg: "rgba(255,149,0,0.1)", border: "rgba(255,149,0,0.2)" },
  purple: { text: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)" },
  green:  { text: "#00d68f", bg: "rgba(0,214,143,0.1)", border: "rgba(0,214,143,0.2)" },
};

function FeaturesStrip() {
  return (
    <section className="features-section">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why I-Com Systems</span>
          <h2 className="section-heading">Performance Without Compromise.</h2>
        </motion.div>

        <div className="features-grid">
          {FEATURES.map((f, i) => {
            const c = ACCENT_COLORS[f.accent];
            return (
              <motion.div
                key={f.title}
                className="feature-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="feature-card-icon"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                >
                  {f.icon}
                </div>
                <h3 className="feature-card-title">{f.title}</h3>
                <p className="feature-card-desc">{f.desc}</p>
                <div className="feature-card-line" style={{ background: c.text }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesStrip;
