// app/page.js
"use client";

import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState("#3498db");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const resetColor = () => {
    setColor("black");
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-dark">
      <h1 className="text-center display-4 fw-bold my-4 text-primary">Color Picker App</h1>

      {/* Color Display */}
      <div
        className="color-display my-4"
        style={{ backgroundColor: color }}
      ></div>

      {/* Bootstrap Form Group */}
      <div className="form-group mb-4">
        <label htmlFor="colorInput" className="form-label h5">Choose a Color:</label>
        <input
          type="color"
          id="colorInput"
          value={color}
          onChange={handleColorChange}
          className="form-control form-control-color w-auto mt-2 cursor-pointer"
        />
      </div>

      {/* Display Selected Color Hex */}
      <div className="bg-white text-dark border border-secondary rounded p-3 shadow-sm">
        <strong>Selected Color:</strong> <span className="fw-bold">{color}</span>
      </div>

      {/* Reset Button with Custom CSS */}
      <button
        onClick={resetColor}
        className="custom-button mt-4"
      >
        Reset Color
      </button>
    </div>
  );
}
