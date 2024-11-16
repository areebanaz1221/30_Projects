"use client";

import { useState, useEffect } from 'react';
import WishForm from './components/WishForm';
import WishDisplay from './components/WishDisplay';
import Balloon from './components/Balloon';
import Firework from './components/Firework';

export default function Home() {
  const [wish, setWish] = useState(null);
  const [balloons, setBalloons] = useState([]);
  const [fireworks, setFireworks] = useState([]);

  const handleWishSubmit = (wishData) => {
    setWish(wishData);
    setFireworks([{ id: Date.now() }]); // Trigger fireworks
  };

  const addBalloon = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setBalloons([...balloons, { x, y }]);
  };

  useEffect(() => {
    const handleMouseClick = (e) => addBalloon(e);
    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, [balloons]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient relative overflow-hidden">
      <h1 className="text-4xl font-bold text-white mb-8">🎉 Create a Birthday Wish! 🎉</h1>
      {!wish ? (
        <WishForm onSubmit={handleWishSubmit} />
      ) : (
        <WishDisplay name={wish.name} message={wish.message} />
      )}
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-500 transition duration-200"
        onClick={() => setWish(null)}
      >
        Create Another Wish
      </button>

      {/* Render Balloons */}
      {balloons.map((balloon, index) => (
        <Balloon key={index} x={balloon.x} y={balloon.y} />
      ))}

      {/* Render Fireworks */}
      {fireworks.map((firework) => (
        <Firework key={firework.id} />
      ))}
    </div>
  );
}
