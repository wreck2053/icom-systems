import "./Product.css";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagesContext } from "../../scripts/HelperFunctions";

function Product(props) {
  let { prod_type, prod_id } = useParams();

  let prod_name = props.data[prod_type]["Name"][prod_id];
  let prod_desc = props.data[prod_type]["Desc"][prod_id];
  let prod_capacity = props.data[prod_type]["Capacity"]?.[prod_id];
  let prod_usage = props.data[prod_type]["Usage"]?.[prod_id];
  let prod_img = imagesContext("./" + prod_id + ".jpg");

  const specs = [
    { label: 'Type', value: prod_type },
    { label: 'Usage', value: prod_usage },
    { label: 'Capacity', value: prod_capacity },
  ].filter(s => s.value);

  return (
    <div className="product-detail">
      {/* Hero banner */}
      <div className="product-detail__hero">
        <div className="product-detail__hero-bg" />
        <div className="container product-detail__breadcrumb">
          <Link to="/product-page" className="breadcrumb-link">Products</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{prod_type}</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current" style={{ color: 'var(--color-text-secondary)' }}>{prod_name}</span>
        </div>
      </div>

      {/* Body */}
      <div className="container product-detail__body">
        {/* Image */}
        <motion.div
          className="product-detail__image-frame"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img src={prod_img} alt={prod_name} className="product-detail__image" />
        </motion.div>

        {/* Info */}
        <motion.div
          className="product-detail__info"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">{prod_type}</span>
          <h1 className="product-detail__title">{prod_name}</h1>

          {specs.length > 0 && (
            <div className="product-detail__specs">
              {specs.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="product-detail__spec-row"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value}</span>
                </motion.div>
              ))}
            </div>
          )}

          {prod_desc && (
            <p className="product-detail__desc">{prod_desc}</p>
          )}

          <Link to="/product-page" className="btn-primary" style={{ marginTop: 'var(--space-4)', alignSelf: 'flex-start' }}>
            ← Back to Products
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Product;
