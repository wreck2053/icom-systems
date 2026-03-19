import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CategoryGrid.css";

const CATEGORIES = [
  {
    key: "ssd-internal",
    name: "Internal SSDs",
    desc: "NVMe and SATA solid-state drives for desktops and laptops. Maximum read/write speeds for professionals.",
    type: "SSD",
    usage: "Internal",
    accent: "blue",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <path d="M6 12h.01M10 12h.01M14 12h.01M18 10v4"/>
      </svg>
    ),
    hash: "#hdr-CRUCIAL",
  },
  {
    key: "ssd-external",
    name: "External SSDs",
    desc: "Portable solid-state storage. High-speed data transfer in rugged, pocket-sized form factors.",
    type: "SSD",
    usage: "External",
    accent: "amber",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
    hash: "#hdr-SEAGATE",
  },
  {
    key: "hdd-internal",
    name: "Hard Drives",
    desc: "High-capacity internal hard disk drives up to 18TB. Ideal for NAS, desktop and enterprise storage.",
    type: "HDD",
    usage: "Internal",
    accent: "purple",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="6"/>
        <path d="M2 12c0 3.31 4.48 6 10 6s10-2.69 10-6"/>
        <path d="M2 6c0 3.31 4.48 6 10 6s10-2.69 10-6"/>
        <circle cx="16" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    hash: "#hdr-SEAGATE",
  },
  {
    key: "hdd-external",
    name: "External HDDs",
    desc: "Portable hard disk drives for backup and extra storage. Plug-and-play simplicity, massive capacity.",
    type: "HDD",
    usage: "External",
    accent: "green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12.5"/>
        <path d="M18 2l4 4-4 4"/>
        <path d="M22 6H10"/>
        <circle cx="7" cy="17" r="1" fill="currentColor"/>
        <path d="M11 17h6"/>
      </svg>
    ),
    hash: "#hdr-SEAGATE",
  },
];

function CategoryGrid({ productData }) {
  // Count products per category
  const counts = {};
  if (productData) {
    for (const p of productData) {
      const key = `${p.Type}-${p.Usage}`.toLowerCase().replace(" ", "-");
      counts[key] = (counts[key] || 0) + 1;
    }
  }

  // Get a sample image per category
  const samples = {};
  if (productData) {
    for (const p of productData) {
      const key = `${p.Type.toLowerCase()}-${p.Usage.toLowerCase()}`;
      if (!samples[key]) samples[key] = p.Image;
    }
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="categories-section">
      <div className="container">
        <motion.div
          className="categories-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Browse by Category</span>
          <h2 className="section-heading">Every Storage Need, Covered.</h2>
        </motion.div>

        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CATEGORIES.map((cat) => {
            const key = `${cat.type.toLowerCase()}-${cat.usage.toLowerCase()}`;
            const count = counts[key] || 0;
            const sampleImg = samples[key];

            return (
              <motion.div key={cat.key} variants={cardVariants}>
                <Link
                  to={`/product-page${cat.hash}`}
                  className={`category-card category-card--${cat.accent}`}
                >
                  <div className="category-card-bg" />

                  {/* Sample product image */}
                  {sampleImg && (
                    <div className="category-card-image">
                      <img src={sampleImg} alt={cat.name} />
                    </div>
                  )}

                  <div className="category-card-body">
                    <div className={`category-card-icon category-card-icon--${cat.accent}`}>
                      {cat.icon}
                    </div>
                    <div className="category-card-text">
                      <p className="category-card-count">{count} Products</p>
                      <h3 className="category-card-title">{cat.name}</h3>
                      <p className="category-card-desc">{cat.desc}</p>
                    </div>
                    <div className="category-card-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default CategoryGrid;
