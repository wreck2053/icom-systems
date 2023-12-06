import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import fetch_data from "../../scripts/FetchData";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";

function MyCarousel() {
  const imagesContext = require.context("../../assets/images", false, /\.jpg$/);
  const imageFiles = imagesContext.keys();
  const numericSort = (a, b) => {
    const regex = /(\d+)/;
    const aNumber = parseInt(a.match(regex)[0], 10);
    const bNumber = parseInt(b.match(regex)[0], 10);
    return aNumber - bNumber;
  };

  const images = imageFiles.sort(numericSort);
  const [data, setData] = useState(null);
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch_data("/data");
      const brands = await fetch_data("/brands");
      setData(data);
      setBrands(brands);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ marginTop: "30%" }}>
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
    );
  }

  function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  for (let id in data) data[id].Image = imagesContext(images[id]);
  const productData = Object.values(data);

  shuffleList(productData);

  const topProducts = [];
  const brandNames = Object.values(brands);
  for (let brandName of brandNames) {
    for (let product of productData) {
      if (brandName === product.Brand) {
        topProducts.push(product);
        break;
      }
    }
  }

  shuffleList(topProducts);

  return (
    <>
      <div style={{ marginTop: 20 }}>
        <MySplider
          height={800}
          productData={topProducts}
          perPage={1}
          title={"Take a look at our best-selling products!"}
          type={"fade"}
          showArrows={false}
        />
      </div>
    </>
  );
}

export default MyCarousel;
