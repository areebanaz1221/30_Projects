
"use client";

import React, { useState } from "react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const GitHubProfileViewer: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  const fetchUserProfile = async () => {
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data: User = await response.json();
      setUser(data);
      setError("");
    } catch (err) {
      setUser(null);
      setError((err as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">GitHub Profile Viewer</h2>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
      </div>
      <button
        onClick={fetchUserProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Profile
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {user && (
        <div className="mt-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold mt-2">{user.login}</h3>
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile on GitHub
            </a>
          </p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileViewer;
