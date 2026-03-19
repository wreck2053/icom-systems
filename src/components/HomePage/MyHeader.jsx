import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processData } from "../../scripts/HelperFunctions";
import "./MyHeader.css";

const NAV_CATEGORIES = [
  {
    name: "Internal SSDs",
    desc: "NVMe & SATA drives",
    hash: "#hdr-CRUCIAL",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M18 10v4"/>
      </svg>
    ),
    color: "#00c2ff",
  },
  {
    name: "External SSDs",
    desc: "Portable solid-state",
    hash: "#hdr-SEAGATE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
    color: "#ff9500",
  },
  {
    name: "Hard Drives",
    desc: "Up to 18TB capacity",
    hash: "#hdr-SEAGATE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12c0 3.31 4.48 6 10 6s10-2.69 10-6"/><circle cx="16" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    name: "External HDDs",
    desc: "Plug-and-play backup",
    hash: "#hdr-SEAGATE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12.5"/><circle cx="7" cy="17" r="1" fill="currentColor"/><path d="M11 17h6"/>
      </svg>
    ),
    color: "#00d68f",
  },
];

function MyHeader(props) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const [, brandNames] = processData(null, props.brands, false, false);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => { clearTimeout(dropdownTimeout.current); setShowDropdown(true); };
  const handleLeave = () => { dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 180); };

  return (
    <header className={"nav-header" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner container">

        <Link to="/" className="nav-brand">
          <span className="nav-brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M18 10v4"/>
            </svg>
          </span>
          <span>I-Com <span className="nav-brand-accent">Systems</span></span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-page" className="nav-link">About Us</Link>

          {/* ── Mega Menu ── */}
          <div className="nav-dropdown-wrapper" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <Link to="/product-page" className={"nav-link nav-link--dropdown" + (showDropdown ? " active" : "")}>
              Products
              <svg
                className={"nav-chevron" + (showDropdown ? " open" : "")}
                width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
              >
                <path d="M6 8L1 3h10L6 8z"/>
              </svg>
            </Link>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  className="megamenu"
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Top arrow */}
                  <div className="megamenu-arrow" />

                  <div className="megamenu-body">
                    {/* Left — Brands */}
                    <div className="megamenu-col">
                      <p className="megamenu-col-label">By Brand</p>
                      <div className="megamenu-brands">
                        {brandNames.map((brand, i) => (
                          <Link
                            key={brand}
                            to={"/product-page#hdr-" + brand}
                            className="megamenu-brand-row"
                            onClick={() => setShowDropdown(false)}
                          >
                            <span
                              className="megamenu-brand-dot"
                              style={{ background: i === 0 ? "#00c2ff" : "#ff9500" }}
                            />
                            <span className="megamenu-brand-name">{brand}</span>
                            <svg className="megamenu-brand-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="megamenu-divider" />

                    {/* Right — Categories */}
                    <div className="megamenu-col megamenu-col--wide">
                      <p className="megamenu-col-label">By Category</p>
                      <div className="megamenu-categories">
                        {NAV_CATEGORIES.map(cat => (
                          <Link
                            key={cat.name}
                            to={"/product-page" + cat.hash}
                            className="megamenu-cat-row"
                            onClick={() => setShowDropdown(false)}
                          >
                            <span
                              className="megamenu-cat-icon"
                              style={{ color: cat.color, background: cat.color + "18" }}
                            >
                              {cat.icon}
                            </span>
                            <span className="megamenu-cat-text">
                              <span className="megamenu-cat-name">{cat.name}</span>
                              <span className="megamenu-cat-desc">{cat.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="megamenu-footer">
                    <Link to="/product-page" className="megamenu-footer-link" onClick={() => setShowDropdown(false)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                      </svg>
                      View all 138+ products
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={"nav-hamburger" + (mobileOpen ? " open" : "")}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Link to="/" className="nav-mobile-link">Home</Link>
            <Link to="/about-page" className="nav-mobile-link">About Us</Link>
            <Link to="/product-page" className="nav-mobile-link">All Products</Link>
            <div className="nav-mobile-sub-group">
              <p className="nav-mobile-sub-label">By Brand</p>
              {brandNames.map(b => (
                <Link key={b} to={"/product-page#hdr-" + b} className="nav-mobile-sub">{b}</Link>
              ))}
            </div>
            <div className="nav-mobile-sub-group">
              <p className="nav-mobile-sub-label">By Category</p>
              {NAV_CATEGORIES.map(c => (
                <Link key={c.name} to={"/product-page" + c.hash} className="nav-mobile-sub">{c.name}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MyHeader;
