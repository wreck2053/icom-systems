import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function SpliderSet() {
  // custom productDetails
  const productDetails = {
    Capacity: "10TB",
    Brand: "Seagate",
    Interface: "SATA 6Gb/s",
    Speed: "7200 RPM",
    Cache: "256MB",
    Usage: "Internal",
    "Advanced Features": [
      "Optimized for creative professionals, gamers, and system builders",
      "Supports multi-tier caching technology",
      "Designed for 24/7 operation",
    ],
  };

  console.log(productDetails);

  const imageURLs = [image1, image2, image3, image4, image5];
  const productNames = [
    "Product1",
    "Product2",
    "Product3",
    "Product4",
    "Product5",
  ];
  const sliderItems = [];
  for (let i in imageURLs)
    sliderItems.push({ imageUrl: imageURLs[i], productName: productNames[i] });
  return (
    <>
      <div className="container">
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="SSD"
          productDetails={productDetails}
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="External Drives SSD"
          productDetails={productDetails}
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="Hard Drives"
          productDetails={productDetails}
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="External Drives HDD"
          productDetails={productDetails}
        />
      </div>
    </>
  );
}

export default SpliderSet;
