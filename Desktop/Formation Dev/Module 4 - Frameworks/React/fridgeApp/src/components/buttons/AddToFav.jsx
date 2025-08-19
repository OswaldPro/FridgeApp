import { useFavourite } from "../context/FavouriteRCtxt";

export default function AddToFavouriteButton({ recipe }) {
  const { isInFavourite, addToFavourite, removeFromFavourite } = useFavourite();
  const isFav = isInFavourite(recipe);

  return (
    <button
      className={isFav ? "enlever" : "ajouter"}
      onClick={() =>
        isFav ? removeFromFavourite(recipe) : addToFavourite(recipe)
      }
    >
      {isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
    </button>
  );
}
