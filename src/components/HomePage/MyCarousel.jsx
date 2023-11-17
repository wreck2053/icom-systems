import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./MyCarousel.css";

function MyCarousel() {
  const carouselRadius = 5;
  const carouselHeight = 500;
  const slideInterval = 2000;
  return (
    <>
      <div className="container" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <h1>
          <strong>Take a look at our top-selling products!</strong>
        </h1>
        <div className="d-flex" style={{ paddingLeft: 5, paddingRight: 5 }}>
          <div className="carousel" style={{ width: "74.5%" }}>
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner"
                style={{ borderRadius: carouselRadius }}
              >
                <div
                  style={{ height: carouselHeight }}
                  id="image-1"
                  className="carousel-item active"
                  data-bs-interval={slideInterval}
                ></div>
                <div
                  style={{ height: carouselHeight }}
                  id="image-2"
                  className="carousel-item"
                  data-bs-interval={slideInterval}
                ></div>
                <div
                  style={{ height: carouselHeight }}
                  id="image-3"
                  className="carousel-item"
                  data-bs-interval={slideInterval}
                ></div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            id="product-info"
            style={{
              display: "flex",
              color: "red",
              width: "25.5%",
              padding: 10,
              height: carouselHeight,
            }}
          >
            <div style={{ padding: 20 }}>
              <h1>SATA DRIVE</h1>
              <ul>
                <li>128GB</li>
                <li>256GB</li>
                <li>512GB</li>
                <li>1024GB</li>
                <li>2048GB</li>
              </ul>
              <button type="btn" className="btn btn-primary">
                View product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCarousel;
