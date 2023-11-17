import './ProductsHome.css';
import Filter from './Filter';
import AvailableProducts from './AvailableProducts';

function ProductsHome() {
  return (
    <div className='prod-home-pg'>
      <Filter />
      <h1 id='prod-pg-title'> Available Products </h1>
      <AvailableProducts />
    </div>
  );
}

export default ProductsHome;