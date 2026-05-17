import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "../styles.css";

function App() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedCity(city);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchedCity && <p>It is 19°C in {searchedCity}</p>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
