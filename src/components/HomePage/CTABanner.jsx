import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CTABanner.css";

function CTABanner() {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-blob cta-blob--1" />
        <div className="cta-blob cta-blob--2" />
        <div className="cta-grid" />
      </div>

      <div className="container cta-inner">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Get Started</span>
          <h2 className="cta-title">
            Find Your Perfect<br />
            <span className="hero-title-gradient">Storage Solution.</span>
          </h2>
          <p className="cta-subtitle">
            Browse 138+ products across SSDs and HDDs from top brands.
            Filter by type, usage, brand, and capacity.
          </p>
          <div className="cta-actions">
            <Link to="/product-page" className="hero-btn-primary cta-btn">
              Browse Full Catalog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/about-page" className="hero-btn-ghost">
              About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;
