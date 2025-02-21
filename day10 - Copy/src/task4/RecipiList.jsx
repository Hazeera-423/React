


import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, setContextMenu }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
       
        <RecipeCard key={recipe.id} recipe={recipe} setContextMenu={setContextMenu}/>
      ))}
    </div>
  );
};

export default RecipeList;
