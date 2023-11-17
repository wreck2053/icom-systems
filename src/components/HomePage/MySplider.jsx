import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function MySplider({ height, sliderItems, perPage, title }) {
  return (
    <>
      <h3>
        <strong>{title}</strong>
      </h3>
      <Splide
        options={{
          type: "loop",
          perPage: perPage,
          perMove: 1,
          pagination: false,
          autoplay: true,
        }}
      >
        {sliderItems.map((slide, index) => (
          <SplideSlide key={index} style={{ padding: 5 }}>
            <a
              target="_blank"
              href="https://www.google.com/"
              style={{ textDecoration: "None" }}
            >
              <div className="card bg-transparent">
                <img
                  className="card-img-top"
                  src={slide.imageUrl}
                  alt="Product Image"
                  height={height}
                />
                <div className="card-body">
                  <strong>{slide.productName}</strong>
                </div>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default MySplider;
