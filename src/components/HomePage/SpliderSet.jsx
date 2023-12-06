import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";

function SpliderSet(props) {
  const InternalSSD = [];
  const ExternalSSD = [];
  const InternalHDD = [];
  const ExternalHDD = [];

  for (let product of props.productData) {
    if (product.Usage === "Internal") {
      product.Type === "SSD"
        ? InternalSSD.push(product)
        : InternalHDD.push(product);
    } else {
      product.Type === "SSD"
        ? ExternalSSD.push(product)
        : ExternalHDD.push(product);
    }
  }

  let perSlider = 8;
  InternalSSD.splice(perSlider);
  ExternalSSD.splice(perSlider);
  InternalHDD.splice(perSlider);
  ExternalHDD.splice(perSlider);

  return (
    <>
      <div className="container">
        <MySplider
          height={200}
          productData={InternalSSD}
          perPage={4}
          title="SSD"
        />
        <MySplider
          height={200}
          productData={ExternalSSD}
          perPage={4}
          title="External Drives SSD"
        />
        <MySplider
          height={200}
          productData={InternalHDD}
          perPage={4}
          title="Hard Drives"
        />
        <MySplider
          height={200}
          productData={ExternalHDD}
          perPage={4}
          title="External Drives HDD"
        />
      </div>
    </>
  );
}

export default SpliderSet;
