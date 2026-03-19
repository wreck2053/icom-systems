import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processData } from "../../scripts/HelperFunctions";
import "./MyHeader.css";

function MyHeader(props) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const [, brandNames] = processData(null, props.brands, false, false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 150);
  };

  return (
    <header className={"nav-header" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner container">
        {/* Brand */}
        <Link to="/" className="nav-brand">I-Com Systems</Link>

        {/* Desktop nav */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-page" className="nav-link">About Us</Link>

          {/* Products dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/product-page" className="nav-link nav-link--dropdown">
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: 4, transition: 'transform var(--transition-fast)', transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d="M6 8L1 3h10L6 8z"/>
              </svg>
            </Link>

            <AnimatePresence>
              {showDropdown && (
                <motion.ul
                  className="nav-dropdown"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  {brandNames.map((brandName) => (
                    <li key={brandName}>
                      <Link
                        to={"/product-page#hdr-" + brandName}
                        className="nav-dropdown-item"
                      >
                        {brandName}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Hamburger button */}
        <button
          className={"nav-hamburger" + (mobileOpen ? " open" : "")}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
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
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="nav-mobile-link">Home</Link>
            <Link to="/about-page" className="nav-mobile-link">About Us</Link>
            <Link to="/product-page" className="nav-mobile-link">Products</Link>
            <div style={{ paddingLeft: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {brandNames.map(brandName => (
                <Link key={brandName} to={"/product-page#hdr-" + brandName} className="nav-mobile-sub">
                  {brandName}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MyHeader;
