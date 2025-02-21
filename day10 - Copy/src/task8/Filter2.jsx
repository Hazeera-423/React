import React from "react";

const Filter2 = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <label>
        Genre:
        <select
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
        >
          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
        </select>
      </label>

      <label>
        Release Year:
        <select
          onChange={(e) => setFilter({ ...filter, releaseYear: e.target.value })}
        >
          <option value="All">All</option>
          
          <option value="2009">2009</option>
          <option value="2019">2019</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </label>
    </div>
  );
};

export default Filter2;
