"use client";

// pages/index.tsx

import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

interface User {
  name: string;
  email: string;
  picture: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const userData = data.results[0];
    setUser({
      name: `${userData.name.first} ${userData.name.last}`,
      email: userData.email,
      picture: userData.picture.large,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <style jsx>{`
        .background {
          background: linear-gradient(to right, #4caf50, #2196f3, #9c27b0);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1; /* Ensure background is behind other elements */
        }

        h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          color: white;
        }

        .loading {
          animation: pulse 1.5s infinite;
          color: white;
          font-size: 1.5rem;
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }

        .button {
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          color: #2196f3;
          font-weight: bold;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .button:hover {
          background: #e0e0e0;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="background" />
      <h1>Random User Generator</h1>
      {user ? (
        <UserCard user={user} />
      ) : (
        <p className="loading">Loading...</p>
      )}
      <button onClick={fetchUser} className="button">
        Generate New User
      </button>
    </div>
  );
}
