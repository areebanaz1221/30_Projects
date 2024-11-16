"use client";

import React, { useState } from 'react';

const colorTips = {
  red: "Red is often associated with passion and energy.",
  blue: "Blue represents calmness and serenity.",
  green: "Green is linked to nature and tranquility.",
  yellow: "Yellow signifies happiness and optimism.",
  // Add more colors and tips as needed
};

const Home = () => {
  const [color, setColor] = useState('');
  const [tip, setTip] = useState('');

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    setTip(colorTips[selectedColor] || 'Select a color to see its tip.');
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Tip Color App</h1>
      <div className="mb-4">
        <label htmlFor="color" className="block mb-2">Choose a color:</label>
        <select 
          id="color" 
          value={color} 
          onChange={handleColorChange} 
          className="form-select block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select a color</option>
          {Object.keys(colorTips).map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {tip && (
        <div className="alert alert-info mt-4" role="alert">
          {tip}
        </div>
      )}
    </div>
  );
};

export default Home;
