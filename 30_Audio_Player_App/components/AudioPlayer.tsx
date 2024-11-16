// components/AudioPlayer.tsx

import React, { useRef, useState } from 'react';

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, title }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-gray-800">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <audio ref={audioRef} src={audioSrc} onError={() => setAudioError(true)} />
      {audioError ? (
        <p className="text-red-500 mt-2">Audio file not found or unsupported</p>
      ) : (
        <button
          onClick={togglePlay}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 focus:outline-none"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
      <style jsx>{`
        h2 {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
