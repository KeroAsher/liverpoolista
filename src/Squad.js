// src/Squad.js
import React, { useState, useEffect } from "react";

export default function Squad() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/https://api.football-data.org/v4/teams/64", {
      headers: {
        "X-Auth-Token": "38f5562099f941b1b877e394b722d199"
      }
    })
      .then((res) => res.json())
      .then((data) => setPlayers(data.squad || []))
      .catch((err) => console.error("Error fetching squad:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Liverpool Squad</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold">{player.name}</h3>
            <p className="text-sm text-gray-700">
              {player.position || "Staff"}{" "}
              <span className="text-gray-400">
                {player.shirtNumber ? `#${player.shirtNumber}` : ""}
              </span>
            </p>
            <p className="text-sm text-gray-500">{player.nationality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
