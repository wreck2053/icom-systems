import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function SpliderSet() {
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
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="External Drives SSD"
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="Hard Drives"
        />
        <MySplider
          height={200}
          sliderItems={sliderItems}
          perPage={4}
          title="External Drives HDD"
        />
      </div>
    </>
  );
}

export default SpliderSet;
