import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import { useState, useEffect } from "react";
import fetch_data from "../../scripts/FetchData";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import LoadingSpinner from "../LoadingSpinner";

function SpliderSet() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch_data("/data");
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ marginTop: 25 }}>
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
    );
  }

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  for (let id in data) data[id].Image = images[id];
  const productData = Object.values(data);

  const InternalSSD = [];
  const ExternalSSD = [];
  const InternalHDD = [];
  const ExternalHDD = [];

  for (let product of productData) {
    if (product.Usage === "Internal") {
      product.Type === "SSD"
        ? InternalSSD.push(product)
        : InternalHDD.push(product);
    } else {
      product.Type === "SSD"
        ? ExternalSSD.push(product)
        : ExternalHDD.push(product);
    }
  }

  function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  shuffleList(InternalSSD);
  shuffleList(ExternalSSD);
  shuffleList(InternalHDD);
  shuffleList(ExternalHDD);

  let perSlider = 8;
  InternalSSD.splice(perSlider);
  ExternalSSD.splice(perSlider);
  InternalHDD.splice(perSlider);
  ExternalHDD.splice(perSlider);

  return (
    <>
      <div className="container">
        <MySplider
          height={200}
          productData={InternalSSD}
          perPage={4}
          title="SSD"
        />
        <MySplider
          height={200}
          productData={ExternalSSD}
          perPage={4}
          title="External Drives SSD"
        />
        <MySplider
          height={200}
          productData={InternalHDD}
          perPage={4}
          title="Hard Drives"
        />
        <MySplider
          height={200}
          productData={ExternalHDD}
          perPage={4}
          title="External Drives HDD"
        />
      </div>
    </>
  );
}

export default SpliderSet;