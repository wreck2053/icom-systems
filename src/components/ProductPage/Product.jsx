import "./Product.css";
import fetch_data from "../../scripts/FetchData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

// new import to map image to product
import { numericSort } from "../../scripts/HelperFunctions";

function Product() {
  const imagesContext = require.context("../../assets/images", false, /\.jpg$/);
  const imageFiles = imagesContext.keys();

  const images = imageFiles.sort(numericSort);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let { prod_type, prod_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch_data("/formatted-data");
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ marginTop: "18%" }}>
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
    );
  }

  let prod_name = data[prod_type]["Name"][prod_id];
  let prod_desc = data[prod_type]["Desc"][prod_id];
  let prod_img = imagesContext(images[prod_id]);

  return (
    <>
      <div className="container product-info">
        <h1 id="prod_hdr"> {prod_name} </h1>
        <img id="prod_img" src={prod_img} alt="Product" />
        <p id="prod_desc"> {prod_desc} </p>
      </div>
    </>
  );
}

export default Product;
