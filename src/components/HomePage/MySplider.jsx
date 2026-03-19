import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "./ProductCard";
import "./MySplider.css";

function MySplider(props) {
  return (
    <div className="splider-section">
      {props.title && (
        <div className="splider-header">
          <div className="splider-divider" />
          <div className="splider-header-text">
            <h2 className="splider-title">{props.title}</h2>
            {props.subtitle && <span className="splider-subtitle">{props.subtitle}</span>}
          </div>
        </div>
      )}
      <Splide
        options={{
          type: props.type ?? "slide",
          rewind: true,
          perPage: props.perPage,
          perMove: 1,
          pagination: false,
          autoplay: true,
          arrows: props.showArrows ?? true,
          gap: "1rem",
          breakpoints: {
            1024: { perPage: Math.min(props.perPage, 3) },
            768:  { perPage: Math.min(props.perPage, 2) },
            480:  { perPage: 1 },
          },
        }}
      >
        {props.productData.map((productDetails, index) => (
          <SplideSlide key={index}>
            <ProductCard
              height={props.height}
              productDetails={productDetails}
              showModal={props.showModal}
              variant={props.variant}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default MySplider;
