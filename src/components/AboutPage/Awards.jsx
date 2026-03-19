import "@splidejs/react-splide/css";
import MySplider from "../HomePage/MySplider";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function Awards() {
  const productDetails = {
    Name: "Award",
    Capacity: "10TB",
    Brand: "Seagate",
    Usage: "Internal",
  };

  const images = [image1, image2, image3, image4, image5];
  const productData = images.map((image) => ({
    ...productDetails,
    Image: image,
  }));

  return (
    <div className="awards-section">
      <MySplider
        height={800}
        productData={productData}
        perPage={1}
        title="Awards & Recognition"
        showArrows={false}
        showModal={false}
        type="fade"
        variant="hero"
      />
    </div>
  );
}

export default Awards;
