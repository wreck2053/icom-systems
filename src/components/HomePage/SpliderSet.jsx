import MySplider from "./MySplider";
import { processData } from "../../scripts/HelperFunctions";
import { motion } from "framer-motion";

function SpliderSet(props) {
  const [productData] = processData(props.data, props.brands, true, true);

  const InternalSSD = [];
  const ExternalSSD = [];
  const InternalHDD = [];
  const ExternalHDD = [];

  for (let product of productData) {
    if (product.Usage === "Internal") {
      product.Type === "SSD" ? InternalSSD.push(product) : InternalHDD.push(product);
    } else {
      product.Type === "SSD" ? ExternalSSD.push(product) : ExternalHDD.push(product);
    }
  }

  let perSlider = 8;
  InternalSSD.splice(perSlider);
  ExternalSSD.splice(perSlider);
  InternalHDD.splice(perSlider);
  ExternalHDD.splice(perSlider);

  const sliders = [
    { data: InternalSSD, title: "Solid State Drives",       sub: "Internal SSD" },
    { data: ExternalSSD, title: "Portable SSDs",             sub: "External SSD" },
    { data: InternalHDD, title: "Hard Disk Drives",          sub: "Internal HDD" },
    { data: ExternalHDD, title: "Portable Hard Drives",      sub: "External HDD" },
  ];

  return (
    <section className="sliders-section">
      <div className="sliders-section-header container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Catalog</span>
          <h2 className="section-heading">Explore Products by Type.</h2>
        </motion.div>
      </div>

      <div className="splider-set container">
        {sliders.map(({ data, title, sub }, i) => (
          data.length > 0 && (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <MySplider
                height={200}
                productData={data}
                perPage={4}
                title={title}
                subtitle={sub}
              />
            </motion.div>
          )
        ))}
      </div>
    </section>
  );
}

export default SpliderSet;
