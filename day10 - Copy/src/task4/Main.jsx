import React, { useState, useEffect } from "react";


import SearchBar from "./SearchBar";
import Filters from "./Filters";
import RecipeList from "./RecipiList";
import ContextMenu from "./Context";
import './Main.css'



function Main() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ vegetarian: "All", prepTime: [0, 50] });
  const [contextMenu, setContextMenu] = useState(null);

  useEffect(() => {
    fetch("/Items.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    let filtered = recipes.filter((recipe) => {
      const matchesSearch = searchQuery
        ? recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : true;

      const matchesFilter =
        (filter.vegetarian === "All" || recipe.vegetarian === (filter.vegetarian === "Yes")) &&
        recipe.preparationTime >= filter.prepTime[0] &&
        recipe.preparationTime <= filter.prepTime[1];

      return matchesSearch && matchesFilter;
    });

    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, filter]);

  return (
    <div className="App">
      <h1>South Indian Food 🥣🧆🍛</h1>
      <h3>Recipe Finder</h3>
    <SearchBar setSearchQuery={setSearchQuery}/>
    <Filters filter={filter} setFilter={setFilter}/>
    <RecipeList recipes={filteredRecipes} setContextMenu={setContextMenu}/>
      
      {contextMenu && <ContextMenu {...contextMenu} />}


    </div>
  );
}

export default Main;
