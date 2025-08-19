import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-img">
        <img src={recipe.image} alt={recipe.nom} />
      </div>
      <h3 className="recipe-title">{recipe.nom}</h3>
    </Link>
  );
}
