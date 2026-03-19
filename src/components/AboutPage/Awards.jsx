import "@splidejs/react-splide/css";
import MySplider from "../HomePage/MySplider";
import { motion } from "framer-motion";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function Awards() {
  const productDetails = {
    Name: "Award",
    Capacity: "10TB",
    Brand: "Seagate",
    Usage: "Internal",
  };

  const images = [image1, image2, image3, image4, image5];
  const productData = images.map((image) => ({ ...productDetails, Image: image }));

  return (
    <div className="awards-wrap">
      {/* Section header with proper padding */}
      <div className="awards-header container">
        <motion.div
          className="awards-header__inner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="awards-header__label-row">
            <span className="section-label">Recognition</span>
            <span className="awards-count-pill">5 Awards</span>
          </div>
          <h2 className="awards-header__title">Awards &amp; Recognition</h2>
          <p className="awards-header__sub">
            Decades of engineering excellence — recognized globally across industry and academia.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="awards-carousel">
        <MySplider
          height={560}
          productData={productData}
          perPage={1}
          showArrows={false}
          showModal={false}
          type="fade"
          variant="hero"
        />
      </div>

      <style>{`
        .awards-wrap {
          background: var(--color-bg-elevated);
          overflow: hidden;
        }
        .awards-header {
          padding-top: var(--space-12);
          padding-bottom: var(--space-8);
        }
        .awards-header__inner {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .awards-header__label-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        .awards-count-pill {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-medium);
          color: var(--color-accent-secondary);
          background: rgba(255, 149, 0, 0.12);
          border: 1px solid rgba(255, 149, 0, 0.25);
          padding: 2px var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }
        .awards-header__title {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
          letter-spacing: var(--letter-spacing-tight);
          color: var(--color-text-primary);
          margin: 0;
        }
        .awards-header__sub {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--line-height-loose);
          max-width: 520px;
          font-family: var(--font-mono);
        }
        .awards-carousel {
          position: relative;
        }
        .awards-carousel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-accent-primary), transparent);
          opacity: 0.4;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default Awards;
