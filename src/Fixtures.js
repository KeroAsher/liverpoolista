// src/Fixtures.js
import React, { useEffect, useState } from "react";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/https://api.football-data.org/v4/teams/64/matches?status=SCHEDULED", {
      headers: {
        "X-Auth-Token": "38f5562099f941b1b877e394b722d199"
      }
    })
      .then((res) => res.json())
      .then((data) => setFixtures(data.matches || []))
      .catch((err) => console.error("Error fetching fixtures:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Fixtures</h2>
      <ul className="space-y-2">
        {fixtures.map((match, index) => (
          <li key={index} className="border-b pb-2">
            <strong>{match.homeTeam.name}</strong> vs{" "}
            <strong>{match.awayTeam.name}</strong> on{" "}
            {new Date(match.utcDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

