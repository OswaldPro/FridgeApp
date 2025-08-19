import { useState, createContext, useContext } from "react";

const FavouriteContext = createContext();

export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState([]); // ingrédients recherchés

  function addToFavourite(recipe) {
    if (!favourites.includes(recipe)) {
      setFavourites([...favourites, recipe]);
    }
  }

  function removeFromFavourite(recipe) {
    setFavourites(favourites.filter((r) => r.id !== recipe.id));
  }

  function isInFavourite(recipe) {
    return favourites.includes(recipe);
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite, isInFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourite() {
  return useContext(FavouriteContext);
}
