"use client";

import React, { useState } from "react";

interface Recipe {
  title: string;
  image: string;
  href: string;
}

const RecipeSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`);
    const data = await res.json();
    setRecipes(data.hits.map((hit: any) => ({
      title: hit.recipe.label,
      image: hit.recipe.image,
      href: hit.recipe.url,
    })));
    setQuery(""); // Clear the input after search
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Recipe Search</h2>
      <form onSubmit={fetchRecipes} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} className="flex items-center border-b py-2">
            <img src={recipe.image} alt={recipe.title} className="w-16 h-16 mr-4 rounded" />
            <div>
              <a href={recipe.href} target="_blank" rel="noopener noreferrer" className="font-semibold">{recipe.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
