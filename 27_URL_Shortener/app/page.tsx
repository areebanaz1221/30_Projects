"use client";

import URLInput from "../components/URLInput";
import URLButton from "../components/URLButton";

export default function Home() {
  return (
    <div className="home-container">
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #3b82f6, #9333ea, #ec4899);
          color: white;
          text-align: center;
        }

        .title {
          font-size: 2.5rem; /* Adjust title size */
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Drop shadow */
        }

        .subtitle {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .input-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .input-container:hover {
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .footer {
          margin-top: 2rem;
          font-size: 0.875rem; /* Smaller font size for footer */
        }
      `}</style>

      <h1 className="title">URL Shortener</h1>
      <p className="subtitle">Shorten your links and share them easily!</p>
      <div className="input-container">
        <URLInput />
        <URLButton />
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
