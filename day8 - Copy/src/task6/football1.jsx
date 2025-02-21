import React, { useState, useEffect } from 'react';

const Football1 = () => {
  const [leagueId, setLeagueId] = useState('39');
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`, {
        headers: {
              "x-rapidapi-key": "c3dfefbd5024f4e64c41820bccdd845c",
        },
      })
        .then((response) => response.json())
        .then((data) => setTeams(data.response || []))
        .catch((error) => console.error("Error:", error));
    }, [leagueId]);

  return (
    <div>
      <h1>Football Teams</h1>
      <select value={leagueId} onChange={(e) => setLeagueId(e.target.value)}>
        <option value="39">Premier League</option>
        <option value="78">Bundesliga</option>
        <option value="140">La Liga</option>
      </select>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Football1;
