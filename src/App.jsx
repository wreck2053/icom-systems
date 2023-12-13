import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import fetch_data from "./scripts/FetchData";
import { numericSort } from "./scripts/HelperFunctions";
import Layout from "./components/Layout/Layout";
import Home from "./components/HomePage/Home";
import ProductsHome from "./components/ProductPage/ProductsHome";
import Product from "./components/ProductPage/Product";
import AboutPage from "./components/AboutPage/AboutPage";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";

function App() {
  const imagesContext = require.context("./assets/images", false, /\.jpg$/);
  const imageFiles = imagesContext.keys();
  const images = imageFiles.sort(numericSort);

  const [data, setData] = useState(null);
  const [brands, setBrands] = useState(null);
  const [formattedData, setFormattedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch_data("/data");
      const brands = await fetch_data("/brands");
      const formattedData = await fetch_data("/formatted-data");
      setData(data);
      setBrands(brands);
      setFormattedData(formattedData);
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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home brands={brands} data={data} />} />
            <Route
              path="product-page"
              element={
                <ProductsHome
                  brands={brands}
                  data={formattedData}
                  imagesContext={imagesContext}
                />
              }
            />
            <Route path="about-page" element={<AboutPage />} />
            <Route
              path="product/:prod_type/id/:prod_id"
              element={
                <Product data={formattedData} imagesContext={imagesContext} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
