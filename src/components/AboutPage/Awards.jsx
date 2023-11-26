import "@splidejs/react-splide/css";
import "bootstrap/dist/css/bootstrap.css";
import MySplider from "../HomePage/MySplider";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function Awards() {
  const imageURLs = [image1, image2, image3, image4, image5];
  const productNames = ["Award 1", "Award 2", "Award 3", "Award 4", "Award 5"];
  const sliderItems = [];
  for (let i in imageURLs)
    sliderItems.push({ imageUrl: imageURLs[i], productName: productNames[i] });

  const showArrows = false;
  return (
    <>
      <div className="container">
        <MySplider
          height={800}
          sliderItems={sliderItems}
          perPage={1}
          title={"AWARDS"}
          showArrows={showArrows}
        />
      </div>
    </>
  );
}

export default Awards;
