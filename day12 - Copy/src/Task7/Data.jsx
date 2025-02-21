

const DataDisplay = ({ title, data }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {Object.values(item).join(" - ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
