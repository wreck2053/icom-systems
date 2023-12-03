import './Product.css';
import prod_img from '../../assets/dummyimage.jpg';
import fetch_data from "../../scripts/FetchData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    let {prod_type, prod_id} = useParams();

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

    let prod_name = data[prod_type]['Name'][prod_id];
    let prod_desc = data[prod_type]['Desc'][prod_id];

    return (
        <>
            <h1 id='prod_hdr'> {prod_name} </h1>
            <img id='prod_img' src={prod_img} alt='Product' />
            <p id='prod_desc'> {prod_desc} </p>
        </>
    );
}

export default Product;