
"use client";

import { useState } from "react";

export default function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [unitType, setUnitType] = useState("length");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");

  const unitOptions = {
    length: ["meters", "feet", "inches"],
    weight: ["kilograms", "pounds", "grams"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
  };

  const convert = () => {
    let result = 0;
    if (unitType === "length") {
      if (fromUnit === "meters" && toUnit === "feet") result = inputValue * 3.28084;
      else if (fromUnit === "meters" && toUnit === "inches") result = inputValue * 39.3701;
      else if (fromUnit === "feet" && toUnit === "meters") result = inputValue / 3.28084;
      // Add more conversions as needed
    } else if (unitType === "weight") {
      if (fromUnit === "kilograms" && toUnit === "pounds") result = inputValue * 2.20462;
      else if (fromUnit === "pounds" && toUnit === "kilograms") result = inputValue / 2.20462;
      // Add more conversions as needed
    } else if (unitType === "temperature") {
      if (fromUnit === "celsius" && toUnit === "fahrenheit") result = (inputValue * 9) / 5 + 32;
      else if (fromUnit === "fahrenheit" && toUnit === "celsius") result = ((inputValue - 32) * 5) / 9;
      // Add more conversions as needed
    }
    setOutputValue(result.toFixed(2));
  };

  const handleUnitTypeChange = (type) => {
    setUnitType(type);
    setFromUnit(unitOptions[type][0]);
    setToUnit(unitOptions[type][1]);
    setOutputValue("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Unit Converter</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Unit Type</label>
        <select
          className="form-select w-full"
          value={unitType}
          onChange={(e) => handleUnitTypeChange(e.target.value)}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Input Value</label>
        <input
          type="number"
          className="form-control w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">From Unit</label>
        <select
          className="form-select w-full"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {unitOptions[unitType].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">To Unit</label>
        <select
          className="form-select w-full"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {unitOptions[unitType].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary w-full mb-4"
        onClick={convert}
      >
        Convert
      </button>
      {outputValue && (
        <p className="text-lg font-semibold text-center">
          Result: {outputValue} {toUnit}
        </p>
      )}
    </div>
  );
}
