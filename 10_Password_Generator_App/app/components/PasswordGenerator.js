"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg space-y-4 transform hover:scale-105 transition-all duration-300">
      <h1 className="text-2xl font-bold text-gray-800">Password Generator</h1>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="form-control w-24 mb-2 text-center"
        min="6"
        max="32"
        placeholder="Length"
      />
      <button
        onClick={generatePassword}
        className="btn btn-primary transform transition-transform hover:scale-110"
      >
        Generate Password
      </button>
      <p className="text-lg font-mono text-gray-700 bg-white p-3 rounded shadow-md">{password}</p>
    </div>
  );
}
