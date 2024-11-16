"use client"

import AudioPlayer from '../components/AudioPlayer';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-400 opacity-30 rounded-full mix-blend-multiply animate-pulse"></div>

      {/* Content */}
      <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
        🎶 Audio Player App 🎶
      </h1>
      <AudioPlayer
        audioSrc="/audio/sample-audio.mp3" 
        title="Sample Audio"
      />
    </div>
  );
};

export default Home;
