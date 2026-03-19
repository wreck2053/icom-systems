import './ProductsHome.css';
import Filter from './Filter';
import FilterParams from './FilterParams';
import AvailableProducts from './AvailableProducts';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ProductsHome(props) {
  const location = useLocation();
  const [globalFilter, setGlobalFilter] = useState({
    'Type':  { 'SSD': false, 'HDD': false, 'Other': false },
    'Usage': { 'External': false, 'Internal': false },
    'Capacity': null,
    'Brand': Object.fromEntries(Object.keys(props.brands).map(key => [props.brands[key], false])),
    'Name': '',
  });

  useEffect(() => {
    setTimeout(() => {
      let id = location.hash.slice(1).replaceAll('%20', ' ');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [location.hash]);

  // Count total products
  const totalProducts = Object.values(props.data).reduce((acc, brand) => {
    return acc + Object.keys(brand.Name || {}).length;
  }, 0);

  return (
    <div>
      {/* Page hero */}
      <div className="catalog-hero">
        <div className="catalog-hero-bg" aria-hidden="true">
          <div className="catalog-hero-blob" />
          <div className="catalog-hero-grid" />
        </div>
        <div className="container catalog-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Product Catalog</span>
            <h1 className="catalog-hero-title">All Products</h1>
            <p className="catalog-hero-sub">
              {totalProducts} products · Filter by type, brand, and capacity
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main catalog layout */}
      <div className="catalog-page container">
        <div className="catalog-layout">
          <aside className="catalog-sidebar">
            <Filter
              filter={globalFilter}
              brands={props.brands}
              setGlobalFilter={setGlobalFilter}
            />
          </aside>
          <main className="catalog-main">
            <FilterParams filter={globalFilter} />
            <AvailableProducts filter={globalFilter} data={props.data} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductsHome;
