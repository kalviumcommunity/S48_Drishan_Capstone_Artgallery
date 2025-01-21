import React from "react";
import Gallery from "./components/gallery.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to ArtSpace</h1>
      </header>
      <Gallery />
      <footer className="app-footer">
        <p>© 2025 ArtSpace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
