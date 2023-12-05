import "./ProductsHome.css";
import "bootstrap/dist/css/bootstrap.css";
import Filter from "./Filter";
import AvailableProducts from "./AvailableProducts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProductsHome() {
  const location = useLocation();

  // Scroll to section
  useEffect(() => {
    setTimeout(() => {
      let id = location.hash.slice(1).replaceAll("%20", " ");
      document.getElementById(id)?.scrollIntoView();
    }, 100);
  }, [location.hash]);

  return (
    <div className="container">
      <Filter />
      <h1 id="prod-pg-title">Available Products</h1>
      <AvailableProducts />
    </div>
  );
}

export default ProductsHome;
