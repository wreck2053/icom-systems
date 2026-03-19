import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductCard.css";

function ProductCard(props) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const isHero = props.variant === "hero";

  return (
    props.productDetails && (
      <>
        <motion.div
          className={"product-card" + (isHero ? " product-card--hero" : "")}
          whileHover={isHero ? {} : { y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={handleOpen}
        >
          <div className="product-card__image-wrap">
            <img
              src={props.productDetails.Image}
              alt={props.productDetails.Name}
              className="product-card__image"
            />
            <div className="product-card__shine" />
            {!isHero && (
              <div className="product-card__overlay">
                <span className="product-card__cta">Quick View</span>
              </div>
            )}
            {isHero && <div className="hero-mesh-overlay" />}
          </div>

          <div className={"product-card__body" + (isHero ? " product-card__body--hero" : "")}>
            {isHero && (
              <span className="product-card__badge product-card__badge--hero">
                {props.productDetails.Brand}
              </span>
            )}
            <p className="product-card__name">{props.productDetails.Name}</p>
            {!isHero && (
              <span className="product-card__badge">{props.productDetails.Type}</span>
            )}
          </div>
        </motion.div>

        {/* Modal */}
        {(props.showModal ?? true) && ReactDOM.createPortal(
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleClose}
              >
                <motion.div
                  className="modal-panel"
                  initial={{ scale: 0.94, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.94, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <h3 className="modal-title">{props.productDetails.Name}</h3>
                    <button className="modal-close" onClick={handleClose} aria-label="Close">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="modal-image-col">
                      <img
                        src={props.productDetails.Image}
                        alt={props.productDetails.Name}
                        className="modal-image"
                      />
                    </div>

                    <div className="modal-info-col">
                      <p className="modal-section-label">Product Info</p>
                      <ul className="modal-spec-list">
                        {[
                          ['Capacity', props.productDetails.Capacity],
                          ['Type', props.productDetails.Type],
                          ['Usage', props.productDetails.Usage],
                          ['Brand', props.productDetails.Brand],
                        ].map(([label, value]) => value && (
                          <li key={label} className="modal-spec-item">
                            <span className="modal-spec-label">{label}</span>
                            <span className="modal-spec-value">{value}</span>
                          </li>
                        ))}
                        {props.productDetails.Desc && (
                          <li className="modal-spec-item">
                            <span className="modal-spec-label">Description</span>
                            <span className="modal-spec-desc">{props.productDetails.Desc}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <Link
                      to={"/product/" + props.productDetails.Brand + "/id/" + props.productDetails.ID}
                      className="btn-primary"
                      onClick={handleClose}
                    >
                      View Full Details
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </>
    )
  );
}

export default ProductCard;
