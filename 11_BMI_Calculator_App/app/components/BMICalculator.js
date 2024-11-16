
"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBMI);
      determineStatus(calculatedBMI);
    }
  };

  const determineStatus = (bmi) => {
    if (bmi < 18.5) setStatus("Underweight");
    else if (bmi >= 18.5 && bmi < 24.9) setStatus("Normal weight");
    else if (bmi >= 25 && bmi < 29.9) setStatus("Overweight");
    else setStatus("Obesity");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">BMI Calculator</h1>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="form-control w-full px-3 py-2 mb-2 border rounded"
          placeholder="Enter your height in cm"
        />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="form-control w-full px-3 py-2 mb-2 border rounded"
          placeholder="Enter your weight in kg"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="btn btn-primary w-full transform transition-transform hover:scale-105"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Your BMI: {bmi}</p>
          <p className="text-md font-medium text-gray-700">{status}</p>
        </div>
      )}
    </div>
  );
}
