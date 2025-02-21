import React, { useState, useEffect } from "react";

const SpaceXLaunch = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/upcoming")
      .then((response) => response.json())
      .then((data) => {
        setLaunches(data.slice(0, 5)); // Limit to 5 launches
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching launches:", error));
  }, []);

  return (
    <div className="spacex-container">
      <h2>Upcoming SpaceX Launches</h2>
      {loading && <p>Loading launches...</p>}
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <h3>{launch.name}</h3>
            <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
            <p>{launch.details || "No details available"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceXLaunch;
