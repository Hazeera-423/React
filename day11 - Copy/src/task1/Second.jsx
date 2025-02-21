const InfoCard = ({ Name, Id }) => {
    return (
      <div>
        <h3>{Name}</h3>
        <p>{Id}</p>
      </div>
    );
  };
  
  const MovieList = () => {
    return (
      <div>
        <InfoCard Name="sam" Id="101" />
        <InfoCard Name="Ram" Id="102" />
      </div>
    );
  };
  export default MovieList