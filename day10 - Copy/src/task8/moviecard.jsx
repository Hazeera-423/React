import React from "react";

const MovieCard2 = ({ movie, setContextMenu }) => {
  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY, movie });
  };

  return (
    <div className="movie-card" onContextMenu={handleRightClick}>
      <img src={movie.imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard2;
