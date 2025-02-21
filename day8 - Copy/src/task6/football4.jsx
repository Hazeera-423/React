import React, { useState, useEffect } from 'react';

const FootballData = () => {
  const [leagueId, setLeagueId] = useState('271'); // Default league ID (e.g., English Premier League)
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFootballData = async () => {
      setLoading(true);
      setError(null);

      const apiUrl = `https://api.sportmonks.com/v3/football/leagues/${leagueId}/teams?api_token=your_api_key_here`;
      console.log('Fetching URL:', apiUrl);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok || !data.data) {
          throw new Error('Failed to fetch football data');
        }

        console.log('API Response:', data);
        setTeams(data.data);
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
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
        <option value="271">Premier League</option>
        <option value="266">Bundesliga</option>
        <option value="275">La Liga</option>
        <option value="285">Serie A</option>
        <option value="258">Ligue 1</option>
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

export default FootballData;
