import './ProductsHome.css';
import fetch_data from '../../scripts/FetchData';
import Filter from './Filter';
import AvailableProducts from './AvailableProducts';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilterParams from './FilterParams';


function ProductsHome() {
  const location = useLocation();
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState({});


  // Scroll to section
  useEffect(() => {
    setTimeout(() => {
        let id = location.hash.slice(1).replaceAll('%20',' ');
        document.getElementById(id)?.scrollIntoView();
    }, 100);
  }, [location.hash]);


  // Fetch brands from dataset and set initial state of filter
  useEffect(() => {
    async function fetchData() {
        const data = await fetch_data('/brands');
        setBrands(data);
        setLoading(false);
        setGlobalFilter({
          'Type': {
              'SSD': false,
              'HDD': false,
              'Other': false,
          },
          'Usage': {
              'External': false,
              'Internal': false,
          },
          'Capacity': null,
          'Brand': Object.fromEntries(Object.keys(data).map(key => [data[key], false])),
          'Name': '',
        });
    }
    fetchData();
  }, []);

  if (loading)
      return (<div> Loading... </div>);


  return (
    <div className='prod-home-pg'>
      <Filter
        filter={globalFilter}
        brands={brands}
        setGlobalFilter={setGlobalFilter}
      />
      <FilterParams
        filter={globalFilter}
      />
      <h1 id='prod-pg-title'> Available Products </h1>
      <AvailableProducts />
    </div>
  );
}

export default ProductsHome;