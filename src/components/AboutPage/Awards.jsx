import "@splidejs/react-splide/css";
import "bootstrap/dist/css/bootstrap.css";
import MySplider from "../HomePage/MySplider";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function Awards() {
  // custom productDetails
  const productDetails = {
    Name: "",
    Capacity: "10TB",
    Brand: "Seagate",
    Interface: "SATA 6Gb/s",
    Speed: "7200 RPM",
    Cache: "256MB",
    Usage: "Internal",
    "Advanced Features": [
      "Optimized for creative professionals, gamers, and system builders",
      "Supports multi-tier caching technology",
      "Designed for 24/7 operation 🔥",
    ],
  };

  const images = [
    "https://www.iafastro.org/assets/image-cache/images/static/awards/industry-award/excellence-industry-award.e71e187e.jpg",
    "https://www.pigeon-in.com/wp-content/uploads/2019/04/1.jpeg",
    "https://www.sarkaritel.com/wp-content/uploads/2022/08/21ntpc_award.jpg",
    "https://in.hd-hyundaice.com/cia-award-image-3.png",
  ];
  const productData = images.map((image) => ({
    ...productDetails,
    Image: image,
  }));

  return (
    <>
      <div className="container">
        <MySplider
          height={800}
          productData={productData}
          perPage={1}
          title={"AWARDS"}
          showArrows={false}
          showModal={false}
          type={"fade"}
        />
      </div>
    </>
  );
}

export default Awards;
