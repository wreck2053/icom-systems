function SearchBox() {
  // Sample data (you can replace this with your data source)
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  // Function to perform the search
  function performSearch(query) {
    const results = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    // Display search results
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

  // Event listener for the search form submission
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.trim();
    performSearch(query);
  });
}

export default SearchBox;
