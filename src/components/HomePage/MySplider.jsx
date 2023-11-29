import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "./ProductCard";

function MySplider(props) {
  return (
    <>
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <Splide
        options={{
          type: "loop",
          perPage: props.perPage,
          perMove: 1,
          pagination: false,
          autoplay: true,
          arrows: props.showArrows ?? true,
        }}
      >
        {props.productData.map((slide, index) => (
          <SplideSlide key={index} style={{ padding: 5 }}>
            <ProductCard
              height={props.height}
              image={slide.imageUrl}
              productDetails={slide.productDetails}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default MySplider;
