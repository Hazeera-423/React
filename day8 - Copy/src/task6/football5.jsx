import React, { useState, useEffect } from "react";
import './football5.css'
const Football12 = () => {
  const [leagueId, setLeagueId] = useState("39"); 
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`,
          {
            headers: {
              "x-rapidapi-key": "fd77abe5d44ea25bcc3c812a18dc4793", 
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); 

        setTeams(data.response || []);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [leagueId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Football Teams</h1>

      <label htmlFor="league-select">Choose a League: </label>
      <select
        id="league-select"
        value={leagueId}
        onChange={(e) => setLeagueId(e.target.value)}
      >
        <option value="39">Premier League</option>
        <option value="78">Bundesliga</option>
        <option value="140">La Liga</option>
      </select>

    
      {loading && <p>Loading teams...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

     
      <ul>
        {teams.map((teamData) => {
          const { team } = teamData; 
          return <li key={team.id}>{team.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Football12;
