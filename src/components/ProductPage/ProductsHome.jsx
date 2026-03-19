import './ProductsHome.css';
import Filter from './Filter';
import FilterParams from './FilterParams';
import AvailableProducts from './AvailableProducts';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductsHome(props) {
  const location = useLocation();
  const [globalFilter, setGlobalFilter] = useState({
    'Type': { 'SSD': false, 'HDD': false, 'Other': false },
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

  return (
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
  );
}

export default ProductsHome;
