// app/page.js
"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [joke, setJoke] = useState("");

  // Fetch initial joke on component mount
  useEffect(() => {
    const fetchInitialJoke = async () => {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      const data = await response.json();
      setJoke(data.joke);
    };

    fetchInitialJoke();
  }, []);

  const fetchNewJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div className="flex flex-col items-center mt-20 space-y-6">
      <h1 className="text-3xl font-bold text-center">Random Joke Generator</h1>
      <p className="text-xl text-center max-w-xl">{joke}</p>
      <button 
        onClick={fetchNewJoke} 
        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Get Another Joke
      </button>
    </div>
  );
}
