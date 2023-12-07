import MyCarousel from "./MyCarousel";
import SpliderSet from "./SpliderSet";

function Home(props) {
  return (
    <div className="container">
      <MyCarousel
        productData={props.productData}
        brandNames={props.brandNames}
      />
      <SpliderSet productData={props.productData} />
    </div>
  );
}

export default Home;
