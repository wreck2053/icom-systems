import './AvailableProducts.css';
import fetch_data from '../../scripts/FetchData';
import create_cards from '../../scripts/CreateCards';
import { filterData, isObjectEmpty } from '../../scripts/FilterUtilities';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function AvailableProducts(props) {    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch_data('/formatted-data');
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading)
        return (<div> Loading... </div>);

    let filteredData = filterData(data, props.filter);
    if(isObjectEmpty(filteredData))
        return <h2 id='no-prod-hdr'> No Available Products Match Your Filter </h2>

    return (
        <>
            {create_cards(filteredData)}
            <Outlet />
        </>
    );
}

export default AvailableProducts;