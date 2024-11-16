
"use client";

import React, { useState } from "react";

const WordCounter: React.FC = () => {
  const [text, setText] = useState<string>("");
  
  const countWords = (text: string): number => {
    const wordsArray = text.trim().split(/\s+/);
    return text.trim() === "" ? 0 : wordsArray.length;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Word Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="border border-gray-300 rounded p-2 w-full h-40 mb-4 resize-none"
      />
      <div className="mt-4">
        <h3 className="font-semibold">
          Word Count: {countWords(text)}
        </h3>
      </div>
    </div>
  );
};

export default WordCounter;
