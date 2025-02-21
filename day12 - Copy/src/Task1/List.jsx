import { useEffect,useState } from "react";

const SearchableList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
 
  useEffect(() => {
    const items = ['Tiger', 'lion', 'Elephant', 'kangaro', 'Dolphin', 'parrot', 'Eagel'];
    setFilteredList(
      items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);  
 
  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}placeholder="Search items"/>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
 
export default SearchableList;