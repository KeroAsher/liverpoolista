import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Squad from "./Squad";
import Fixtures from "./Fixtures";
import MatchCentre from "./MatchCentre";



function Home() {
  return (
    <div className="p-6 text-center">
      <img
        src="/anfield.jpg"
        alt="Anfield"
        style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto", borderRadius: "10px" }}
      />
      <h2 className="text-xl font-semibold mt-4">Latest Result</h2>
      <p>Liverpool FC - Crystal Palace FC</p>
      <h2 className="text-xl font-semibold mt-4">Featured Article</h2>
      <p>How Klopp Built a Legacy: Tactics, Transfers and Titles</p>
      <h2 className="text-xl font-semibold mt-4">Player of the Match</h2>
      <div>
        <button>Salah (0 votes)</button>
        <button>Nunez (0 votes)</button>
        <button>Szoboszlai (0 votes)</button>
      </div>
      <h2 className="text-xl font-semibold mt-4">Subscribe to Our Newsletter</h2>
      <input placeholder="Enter your email" /> <button>Subscribe</button>
      <footer className="mt-6 text-sm text-gray-500">© 2025 Liverpoolista. YNWA.</footer>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans">
        <header className="bg-red-700 text-white p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
              alt="Liverpool FC"
              className="h-12"
            />
            <h1 className="text-3xl font-bold">Liverpoolista</h1>
          </div>
          <nav className="flex flex-wrap gap-4 mt-2 text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/fixtures" className="hover:underline">Fixtures & Results</Link>
            <Link to="/squad" className="hover:underline">Squad</Link>
            <Link to="/match-centre" className="hover:underline">Match Centre</Link>

          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/squad" element={<Squad />} />
            <Route path="/match-centre" element={<MatchCentre />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}
