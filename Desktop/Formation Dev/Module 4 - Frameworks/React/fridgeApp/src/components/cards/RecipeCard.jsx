import { Link } from "react-router-dom";
import { useFavourite } from "../context/FavouriteRCtxt";

export default function RecipeCard({ recipe }) {
  const { isInFavourite } = useFavourite();
  const isFav = isInFavourite(recipe);

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-img">
        <h4>{isFav ? "F" : ""}</h4>
        <img src={recipe.image} alt={recipe.nom} />
      </div>
      <h3 className="recipe-title">{recipe.nom}</h3>
    </Link>
  );
}
