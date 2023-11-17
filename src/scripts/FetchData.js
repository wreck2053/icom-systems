let cachedProductsData = null;

async function fetch_data(){
	if(cachedProductsData !== null){
		return cachedProductsData;
	}
	const response = await fetch('http://localhost:5000/data');
	const products_data = await response.json();
	cachedProductsData = products_data;
	return products_data;	
}

export default fetch_data;