// Homepage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Palette</div>
        <nav className="nav">
          <button className="nav-button" onClick={() => navigate("/signup")}>
            Sign up
          </button>
          <button className="nav-button">Profile</button>
        </nav>
      </header>

      <main className="main">
        <h1>Discover Art</h1>
        <div className="gallery">
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
