import React, { useState, useEffect } from "react";

import "./Movie.css";
import SearchBar2 from "./Search2";
import Filter2 from "./Filter2";
import MovieList from "./Movielist";
import ContextMenu2 from "./menu";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ genre: "All", releaseYear: "All" });
  const [contextMenu, setContextMenu] = useState(null);

  useEffect(() => {
    fetch("/movie.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  useEffect(() => {
    let filtered = movies.filter((movie) => {
      const matchesSearch = searchQuery? movie.title.toLowerCase().includes(searchQuery.toLowerCase()): true;

      const matchesFilter =(filter.genre === "All" || movie.genre === filter.genre) &&
      (filter.releaseYear === "All" || movie.releaseYear.toString() === filter.releaseYear);

      return matchesSearch && matchesFilter;
    });

    setFilteredMovies(filtered);
  }, [movies, searchQuery, filter]);

  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <SearchBar2 setSearchQuery={setSearchQuery}/>
      <Filter2 filter={filter} setFilter={setFilter}/>
      <MovieList  movies={filteredMovies} setContextMenu={setContextMenu}/>
      {contextMenu && <ContextMenu2 {...contextMenu}/>}

      
    </div>
  );
}

export default Movie;
