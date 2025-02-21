

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <label>
        Vegetarian:
        <select value={filter.vegetarian} onChange={(e) => setFilter({ ...filter, vegetarian: e.target.value })} >
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label>
        Preparation Time:
        <select
          onChange={(e) =>
            setFilter({ ...filter, prepTime: e.target.value.split("-").map(Number) })
          }
        >
          <option value="0-30">All</option>
          <option value="0-10">0 - 10 mins</option>
          <option value="10-20">10 - 20 mins</option>
          <option value="20-30">20 - 30 mins</option>
          <option value="20-30">30 - 40 mins</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
