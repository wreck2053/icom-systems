import fetch_data from "../../scripts/fetchData";
import create_cards from "../../scripts/createCards";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

function AvailableProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch_data("/formatted-data");
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ marginTop: 25 }}>
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
    );
  }

  return (
    <>
      {create_cards(data)}
      <Outlet />
    </>
  );
}

export default AvailableProducts;
