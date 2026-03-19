import MySplider from "./MySplider";
import { processData } from "../../scripts/HelperFunctions";

function MyCarousel(props) {
  const [productData, brandNames] = processData(
    props.data,
    props.brands,
    true,
    true
  );
  const topProducts = [];
  for (let brandName of brandNames) {
    for (let product of productData) {
      if (brandName === product.Brand) {
        topProducts.push(product);
        break;
      }
    }
  }

  return (
    <MySplider
      height={800}
      productData={topProducts}
      perPage={1}
      title={null}
      type={"fade"}
      showArrows={false}
      variant="hero"
    />
  );
}

export default MyCarousel;
