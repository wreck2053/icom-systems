import fetch_data from '../../scripts/FetchData';
import create_cards from '../../scripts/CreateCards';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function AvailableProducts() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch_data();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading)
        return (<div> Loading... </div>);

    return (
        <>
            {create_cards(data)}
            <Outlet />
        </>
    );
}

export default AvailableProducts;