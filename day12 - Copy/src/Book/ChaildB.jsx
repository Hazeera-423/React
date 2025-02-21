

const ChaildB = ({ Arr }) => {
    return (
      <div>
        {Arr.map((Arr, index) => (
          <div key={index}>
            <h4>{Arr.name}</h4>
            <h5>{Arr.id}</h5>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChaildB;
  