// Homepage.jsx
import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Palette</div>
        <nav className="nav">
          <button className="nav-button">Login</button>
          <button className="nav-button">Logout</button>
          <button className="nav-button">Profile</button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main">
        <h1>Discover Art</h1>
        <div className="gallery">
          {/* Placeholder images */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="gallery-item">
              <img
                src={`https://via.placeholder.com/150?text=Art+${index + 1}`}
                alt={`Art ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
