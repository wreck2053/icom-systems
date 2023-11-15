import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import SpliderSet from "./components/SpliderSet";
import MyFooter from "./components/MyFoooter";
import MyCarousel from "./components/MyCarousel";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";

function App() {
  const imageURLs = [image1, image2, image3, image4, image5];
  const productNames = [
    "Product1",
    "Product2",
    "Product3",
    "Product4",
    "Product5",
  ];
  const myItems = [];
  for (const i in imageURLs)
    myItems.push({ imageUrl: imageURLs[i], productName: productNames[i] });

  return (
    <>
      <MyHeader />
      <MyCarousel />
      <SpliderSet />
      <MyFooter />
    </>
  );
}

export default App;
