
  const Movie2 = () => {
    const MovieCard = ({ title }) => {
    return <h3>🎬 {title}</h3>;
  };
  
  
  const MovieItem = ({ title }) => {
    return <MovieCard title={title} />;
  };
  
  
  const MovieList = ({ title }) => {
    return <MovieItem title={title} />;
  };
  
    return (
      <div>
        <h2>Movie List</h2>
       
        <MovieList title="KGF" />
      </div>
    );
  };
  
  export default Movie2;
  