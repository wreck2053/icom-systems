import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/HomePage/Home";
import ProductsHome from "./components/ProductPage/ProductsHome";
import Product from "./components/ProductPage/Product";
import AboutPage from "./components/AboutPage/AboutPage";

// new imports after fetching data here
import { useState, useEffect } from "react";
import fetch_data from "./scripts/FetchData";
import { numericSort, shuffleList } from "./scripts/HelperFunctions";
import LoadingSpinner from "./components/LoadingSpinner";

import NotFound from "./components/NotFound";

function App() {
  const imagesContext = require.context("./assets/images", false, /\.jpg$/);
  const imageFiles = imagesContext.keys();

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
      <div className="container" style={{ marginTop: "25%" }}>
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
    );
  }

  for (let id in data) {
    data[id].Image = imagesContext(images[id]);
    data[id].ID = id;
  }
  const productData = Object.values(data);
  const brandNames = Object.values(brands);

  shuffleList(productData);
  shuffleList(brandNames);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home productData={productData} brandNames={brandNames} />
              }
            />
            <Route path="product-page" element={<ProductsHome />} />
            <Route path="about-page" element={<AboutPage />} />
            <Route
              path="product/:prod_type/id/:prod_id"
              element={<Product />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
