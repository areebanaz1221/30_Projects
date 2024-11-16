
"use client";

import { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsBreak(!isBreak);
            return isBreak ? 1500 : 300; // 25 mins or 5 mins
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
    setIsBreak(false);
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">{isBreak ? "Break Time" : "Pomodoro Timer"}</h1>
      <div className="text-6xl font-mono mb-4">{formatTime(time)}</div>
      <button
        className={`btn ${isActive ? "btn-danger" : "btn-success"} mb-2`}
        onClick={toggleTimer}
      >
        {isActive ? "Pause" : "Start"}
      </button>
      <button className="btn btn-secondary" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
