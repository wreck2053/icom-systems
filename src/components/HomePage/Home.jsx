import HeroSection from "./HeroSection";
import ProductMarquee from "./ProductMarquee";
import FeaturesStrip from "./FeaturesStrip";
import CategoryGrid from "./CategoryGrid";
import SpliderSet from "./SpliderSet";
import CTABanner from "./CTABanner";
import { processData } from "../../scripts/HelperFunctions";

function Home(props) {
  // Get all products with images attached
  const [productData] = processData(props.data, props.brands, true, false);

  // Pick the featured product for the hero (first SSD with a capacity)
  const featuredProduct =
    productData.find(p => p.Type === "SSD" && p.Capacity) || productData[0];

  return (
    <div>
      <HeroSection featuredProduct={featuredProduct} />
      <ProductMarquee productData={productData} />
      <FeaturesStrip />
      <CategoryGrid productData={productData} />
      <SpliderSet data={props.data} brands={props.brands} />
      <CTABanner />
    </div>
  );
}

export default Home;
