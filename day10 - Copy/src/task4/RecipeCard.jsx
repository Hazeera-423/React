import React from "react";

const RecipeCard = ({ recipe, setContextMenu }) => {
  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY, recipe });
  };

  return (
    <div className="recipe-card" onContextMenu={handleRightClick}>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <h3 style={{color:'blue'}}>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Time: {recipe.preparationTime} mins</p>
      <p>{recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</p>
    </div>
  );
};

export default RecipeCard;
