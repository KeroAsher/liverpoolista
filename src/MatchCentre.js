// src/MatchCentre.js
import React, { useEffect, useState } from "react";

export default function MatchCentre() {
  const [matches, setMatches] = useState([]);
  const [activeTab, setActiveTab] = useState("LIVE");

  useEffect(() => {
    fetch("https://cors-anywhere-eight-zeta.vercel.app/https://api.football-data.org/v4/teams/64/matches", {
        headers: {
          "X-Auth-Token": "38f5562099f941b1b877e394b722d199"
        }
      })
      .then(res => res.json())
      .then(data => setMatches(data.matches || []))
      .catch(err => console.error("Error fetching match data:", err));
  }, []);

  const now = new Date();
  const filtered = matches.filter(match => {
    const matchDate = new Date(match.utcDate);
    if (activeTab === "LIVE") return match.status === "IN_PLAY";
    if (activeTab === "UPCOMING") return matchDate > now;
    if (activeTab === "PAST") return matchDate <= now && match.status === "FINISHED";
    return true;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Match Centre</h2>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setActiveTab("LIVE")}>🟢 Live</button>
        <button onClick={() => setActiveTab("UPCOMING")}>📅 Upcoming</button>
        <button onClick={() => setActiveTab("PAST")}>🏁 Results</button>
      </div>
      <div>
        {filtered.length === 0 ? (
          <p>No matches to show for this tab.</p>
        ) : (
          filtered.map((match, i) => (
            <div key={i} className="mb-4 border-b pb-2">
              <strong>{match.homeTeam.name}</strong> vs <strong>{match.awayTeam.name}</strong>
              <br />
              <span>Status: {match.status}</span>
              <br />
              <span>Date: {new Date(match.utcDate).toLocaleString()}</span>
              {match.status === "FINISHED" && (
                <p>Score: {match.score.fullTime.home} - {match.score.fullTime.away}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

