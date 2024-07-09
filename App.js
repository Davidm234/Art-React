import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtCard from "./components/ArtCard";

const App = () => {
  const [artId, setArtId] = useState("");
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setArtId(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setArtwork(null);

    try {
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/${artId}`
      );
      setArtwork(response.data.data);
    } catch (err) {
      setError("Artwork not found. Please try a different ID.");
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <form onSubmit={handleFormSubmit} className="search-form">
          <input
            type="text"
            value={artId}
            onChange={handleInputChange}
            placeholder="Enter Art ID"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {artwork && <ArtCard artwork={artwork} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
