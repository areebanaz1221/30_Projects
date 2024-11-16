"use client";

import React, { useState } from "react";

const MemeGenerator: React.FC = () => {
  const [topText, setTopText] = useState<string>("");
  const [bottomText, setBottomText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [memeImage, setMemeImage] = useState<string>("");

  const generateMeme = () => {
    if (topText && bottomText && imageUrl) {
      const meme = `https://api.memegen.link/images/custom/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png?background=${imageUrl}`;
      setMemeImage(meme);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Meme Generator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Top Text"
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Bottom Text"
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
      </div>
      <button
        onClick={generateMeme}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Meme
      </button>

      {memeImage && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Your Meme:</h3>
          <img src={memeImage} alt="Generated Meme" className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
