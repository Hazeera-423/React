import React, { useState, useEffect } from 'react';

const Football = () => {
  const [leagueId, setLeagueId] = useState('39'); 
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchFootballData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
              `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`,
          {
            headers: {
              'X-Auth-Token': 'c4cb8d6097c64194a6d5a4457723837c', 
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch football data');
        }
        const data = await response.json();
        setTeams(data.teams || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFootballData();
  }, [leagueId]);

  const handleLeagueChange = (e) => {
    setLeagueId(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Football Teams</h1>

      {/* Dropdown to select league */}
      <label htmlFor="league">Choose a League: </label>
      <select id="league" value={leagueId} onChange={handleLeagueChange}>
        <option value="39">Premier League</option>
        <option value="78">Bundesliga</option>
        <option value="140">La Liga</option>
        <option value="135">Serie A</option>
        <option value="61">Ligue 1</option>
      </select>

      {/* Loading and Error Handling */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display teams */}
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Football;
