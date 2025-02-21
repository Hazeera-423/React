const MovieCard = ({ title, genre }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
    );
  };
  
  const MovieList = () => {
    return (
      <div>
        <MovieCard title="Inception" genre="Sci-Fi" />
        <MovieCard title="Interstellar" genre="Drama" />
        <MovieCard title="Titanic" genre="Drama" />
      </div>
    );
  };
  
  const App22 = () => {
    return (
      <div>
        <h2>Movie List</h2>
        <MovieList />
      </div>
    );
  };
  
  export default App22;
  