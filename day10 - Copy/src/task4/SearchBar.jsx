

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input type="text" placeholder="Search recipes..." onChange={(e) => setSearchQuery(e.target.value)}  style={{ width: "50%", maxWidth: "300px", padding: "8px" }}/>
  );
};

export default SearchBar;
