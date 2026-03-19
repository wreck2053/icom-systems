import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";

function HeroSection({ featuredProduct }) {
  return (
    <section className="hero">
      {/* Animated blob background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />
        <div className="hero-grid-overlay" />
        <div className="hero-noise" />
      </div>

      <div className="hero-inner container">
        {/* ── Left: Copy ── */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="hero-badge-pulse" />
            Premium Storage Solutions
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Storage Built<br />
            for the Next<br />
            <span className="hero-title-gradient">Generation.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            138+ products from the world's leading brands. From blazing-fast
            NVMe SSDs to enterprise-grade HDDs — every form factor, every capacity.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
          >
            <Link to="/product-page" className="hero-btn-primary">
              Browse Catalog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/about-page" className="hero-btn-ghost">
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {[
              { num: "138+", label: "Products" },
              { num: "2", label: "Top Brands" },
              { num: "4", label: "Categories" },
              { num: "18TB", label: "Max Capacity" },
            ].map(({ num, label }, i) => (
              <motion.div
                key={label}
                className="hero-stat"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
              >
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Product Visual ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {featuredProduct && (
            <>
              {/* Glow */}
              <div className="hero-product-glow" />

              {/* Rotating rings */}
              <div className="hero-ring hero-ring--outer" />
              <div className="hero-ring hero-ring--mid" />
              <div className="hero-ring hero-ring--inner" />

              {/* Floating product card */}
              <motion.div
                className="hero-product-card"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="hero-product-img-wrap">
                  <img
                    src={featuredProduct.Image}
                    alt={featuredProduct.Name}
                    className="hero-product-img"
                  />
                </div>
                <div className="hero-product-meta">
                  <div className="hero-product-top">
                    <span className="hero-product-type">{featuredProduct.Type}</span>
                    <span className="hero-product-brand">{featuredProduct.Brand}</span>
                  </div>
                  <p className="hero-product-name">{featuredProduct.Name}</p>
                  <div className="hero-product-bottom">
                    <span className="hero-product-cap">{featuredProduct.Capacity}</span>
                    <div className="hero-product-dots">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating chips */}
              <motion.div
                className="hero-chip hero-chip--speed"
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, delay: 0.7 }}
              >
                <span className="chip-indicator chip-indicator--blue" />
                <span>NVMe Speed</span>
              </motion.div>

              <motion.div
                className="hero-chip hero-chip--cap"
                animate={{ y: [0, 9, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
              >
                <span className="chip-indicator chip-indicator--amber" />
                <span>Up to 18TB</span>
              </motion.div>

              <motion.div
                className="hero-chip hero-chip--brand"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity, delay: 1.8 }}
              >
                <span className="chip-indicator chip-indicator--green" />
                <span>Trusted Brands</span>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="hero-scroll-mouse">
          <motion.div
            className="hero-scroll-wheel"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

export default HeroSection;
