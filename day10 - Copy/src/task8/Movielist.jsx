import React from "react";
//import MovieCard from "./MovieCard";
import MovieCard2 from "./moviecard";

const MovieList = ({ movies, setContextMenu }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
      <MovieCard2 key={movie.id} movie={movie} setContextMenu={setContextMenu}/>
        // <MovieCard key={movie.id} movie={movie} setContextMenu={setContextMenu} />
      ))}
    </div>
  );
};

export default MovieList;
