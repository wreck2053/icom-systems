import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";

function MyCarousel(props) {
  const topProducts = [];
  for (let brandName of props.brandNames) {
    for (let product of props.productData) {
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
