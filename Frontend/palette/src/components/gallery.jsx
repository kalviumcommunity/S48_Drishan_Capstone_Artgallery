import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch function, replace with your API endpoint
    const fetchArtworks = async () => {
      try {
        const response = await fetch("https://api.example.com/artworks");
        const data = await response.json();
        setArtworks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Art Gallery</h1>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="artwork-image"
            />
            <div className="artwork-info">
              <h2 className="artwork-title">{artwork.title}</h2>
              <p className="artwork-artist">By {artwork.artist}</p>
              <p className="artwork-price">${artwork.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
