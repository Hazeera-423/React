

const SearchBar2 = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar2;
