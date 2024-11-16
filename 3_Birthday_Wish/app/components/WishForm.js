"use client";

import { useState } from 'react';

const WishForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, message });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-96">
      <input
        type="text"
        placeholder="Recipient's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <textarea
        placeholder="Your Birthday Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-400 transition duration-200">
        Create Wish
      </button>
    </form>
  );
};

export default WishForm;
