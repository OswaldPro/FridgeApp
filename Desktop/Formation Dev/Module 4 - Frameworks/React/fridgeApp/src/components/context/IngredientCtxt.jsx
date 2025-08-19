import { useEffect, useState, createContext, useContext } from "react";

const IngredientContext = createContext();

export function IngredientProvider({ children }) {
  const [results, setResults] = useState([]);
  const [ingredients, setIngredients] = useState([]); // ingrédients recherchés

  useEffect(() => {
    fetch("/assets/recettes_cuisine.json")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <IngredientContext.Provider
      value={{ results, ingredients, setIngredients }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

export function useIngredient() {
  return useContext(IngredientContext);
}
