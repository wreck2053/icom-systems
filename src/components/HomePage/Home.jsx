import MyCarousel from "./MyCarousel";
import SpliderSet from "./SpliderSet";

function Home(props) {
  return (
    <div>
      {/* Full-bleed hero — no container constraint */}
      <MyCarousel data={props.data} brands={props.brands} />

      {/* Product sliders in container */}
      <div style={{ padding: 'var(--space-12) 0' }}>
        <SpliderSet data={props.data} brands={props.brands} />
      </div>
    </div>
  );
}

export default Home;
