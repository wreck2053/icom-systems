import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/HomePage/Home";
import ProductsHome from "./components/ProductPage/ProductsHome";
import Product from "./components/ProductPage/Product";
import AboutPage from "./components/AboutPage/AboutPage";
import YourComponent from "./components/YourComponent";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      < YourComponent />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product-page" element={<ProductsHome />} />
            <Route path="about-page" element={<AboutPage />} />
            <Route
              path="product/:prod_type/id/:prod_id"
              element={<Product />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
