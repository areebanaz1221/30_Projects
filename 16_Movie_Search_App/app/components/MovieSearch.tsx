// components/MovieSearch.tsx
"use client";

import React, { useState } from "react";

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query) return;

    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setError("");
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Movie Search</h2>
      <p className="mb-4 text-gray-600">Search for your favorite Bollywood and Hollywood movies!</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <ul className="mt-6">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="flex items-center border-b py-2">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image-available.png"} alt={movie.Title} className="w-16 h-24 mr-4" />
            <div>
              <h3 className="font-semibold">{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p className="text-sm text-gray-500">{movie.Type === "movie" ? "Movie" : movie.Type}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
