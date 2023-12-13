import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import { homePageData } from "../../scripts/HelperFunctions";

function MyCarousel(props) {
  const [productData, brandNames] = homePageData(props.data, props.brands);
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
    <>
      <div style={{ marginTop: 20 }}>
        <MySplider
          height={800}
          productData={topProducts}
          perPage={1}
          title={"Take a look at our best-selling products!"}
          type={"fade"}
          showArrows={false}
        />
      </div>
    </>
  );
}

export default MyCarousel;
