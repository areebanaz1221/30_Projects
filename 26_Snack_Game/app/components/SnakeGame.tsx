"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: Math.floor(Math.random() * BOARD_SIZE), y: Math.floor(Math.random() * BOARD_SIZE) };

const ProfessionalSnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Position>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const updateFoodPosition = () => {
    const newX = Math.floor(Math.random() * BOARD_SIZE);
    const newY = Math.floor(Math.random() * BOARD_SIZE);
    setFood({ x: newX, y: newY });
  };

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const newHead = {
        x: (prevSnake[0].x + direction.x + BOARD_SIZE) % BOARD_SIZE,
        y: (prevSnake[0].y + direction.y + BOARD_SIZE) % BOARD_SIZE,
      };

      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prevScore) => prevScore + 1);
        updateFoodPosition();
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  }, [direction, food]);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case "ArrowLeft":
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case "ArrowRight":
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
    }
  };

  useEffect(() => {
    if (gameOver) return;

    document.addEventListener("keydown", handleKeyDown);
    const intervalId = setInterval(moveSnake, 120);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, [moveSnake, gameOver]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    updateFoodPosition();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white">
      <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-500">
        Professional Snake Game
      </h1>
      <div className="text-lg font-semibold mb-4 bg-gray-900 px-4 py-2 rounded-lg shadow-md">
        Score: <span className="text-green-400">{score}</span>
      </div>
      <div
        className="relative grid gap-0"
        style={{
          width: `min(80vmin, 400px)`,
          height: `min(80vmin, 400px)`,
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
          border: "8px solid #333",
          borderRadius: "12px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
          background: "linear-gradient(to bottom right, #1c1c1c, #333)"
        }}
      >
        {Array.from(Array(BOARD_SIZE * BOARD_SIZE)).map((_, index) => {
          const x = index % BOARD_SIZE;
          const y = Math.floor(index / BOARD_SIZE);
          const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={index}
              className={`w-full h-full transition-all duration-300 ${
                isSnake
                  ? "bg-gradient-to-r from-green-500 to-green-700 shadow-lg rounded-lg transform scale-95"
                  : isFood
                  ? "bg-gradient-to-r from-red-500 to-red-700 animate-pulse rounded-full"
                  : "bg-gray-800"
              }`}
              style={{
                boxShadow: isSnake
                  ? "0px 0px 15px rgba(34, 197, 94, 0.6)"
                  : isFood
                  ? "0px 0px 10px rgba(239, 68, 68, 0.6)"
                  : "none",
              }}
            ></div>
          );
        })}
      </div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-4">Game Over!</h2>
            <button
              onClick={restartGame}
              className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition"
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalSnakeGame;
