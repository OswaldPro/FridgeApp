import { useState, createContext, useContext, useEffect } from "react";

const FavouriteContext = createContext();

export function FavouriteProvider({ children }) {
  // Init du localStorage
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourite"); // on stock les fav dans le localStorage "saved"
    return saved ? JSON.parse(saved) : []; // getItem renvoie toujorus une string, donc il faut parse pour transformer en tableau d'objet
  });

  // Pour sauvegarder les modif on a besoin de useEffect pour pouvoir s'exec a chaque ajout/supp d'un fav
  // Sauvegarde à chaque modif
  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourites)); // local storage stock des string donc pour stocker une objet on le stringify avant de le stocker
  }, [favourites]);

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

  const favouritesCount = favourites.length;

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        favouritesCount,
        addToFavourite,
        removeFromFavourite,
        isInFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourite() {
  return useContext(FavouriteContext);
}
