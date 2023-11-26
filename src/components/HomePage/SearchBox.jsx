import fetch_data from "../../scripts/FetchData";
import { useState, useEffect } from "react";
import SearchFunction from "../../scripts/SearchFunction";

function SearchBox() {
  // Product data
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

  const productTypes = [];
  const productNames = [];

  for (let key in data) productTypes.push(data[key]["Product Name"]);
  for (let key in productTypes) {
    for (let productName of Object.values(productTypes[key])) {
      productNames.push(productName);
    }
  }

  if (!loading) {
    // Function to display search results
    function DisplaySearchResults(query) {
      const results = SearchFunction(query, productNames);

      const searchResults = document.getElementById("search-results");
      searchResults.innerHTML = "";

      if (results.length === 0) {
        searchResults.innerHTML = "No results found.";
      } else {
        const ul = document.createElement("ul");
        results.forEach((result) => {
          const li = document.createElement("li");
          li.textContent = result;
          ul.appendChild(li);
        });
        searchResults.appendChild(ul);
      }
    }

    // Event listener for the search form in MyHeader.jsx
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = document.getElementById("search-input");
      const query = searchInput.value.trim();
      DisplaySearchResults(query);
    });
  }
}

export default SearchBox;
