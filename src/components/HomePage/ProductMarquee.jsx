import "./ProductMarquee.css";

function ProductMarquee({ productData }) {
  if (!productData || productData.length === 0) return null;

  // Split into two rows for dual-direction effect
  const half = Math.ceil(productData.length / 2);
  const row1 = productData.slice(0, half);
  const row2 = productData.slice(half);

  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-label">
        <span>— Product Showcase</span>
      </div>

      {/* Row 1: forward */}
      <div className="marquee-track">
        <div className="marquee-row marquee-row--fwd">
          {[...row1, ...row1].map((p, i) => (
            <div key={i} className="marquee-card">
              <div className="marquee-card-inner">
                <img
                  src={p.Image}
                  alt={p.Name}
                  className="marquee-img"
                  loading="lazy"
                />
              </div>
              <div className="marquee-card-tag">{p.Type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: reverse */}
      <div className="marquee-track">
        <div className="marquee-row marquee-row--rev">
          {[...row2, ...row2].map((p, i) => (
            <div key={i} className="marquee-card">
              <div className="marquee-card-inner">
                <img
                  src={p.Image}
                  alt={p.Name}
                  className="marquee-img"
                  loading="lazy"
                />
              </div>
              <div className="marquee-card-tag">{p.Brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductMarquee;
