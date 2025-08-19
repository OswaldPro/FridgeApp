import { useState } from "react";
import { useIngredient } from "../context/IngredientCtxt";
import PrimaryBtn from "../buttons/primaryBtn";
import GoBtn from "../buttons/GoBtn";
import { PiPlus } from "react-icons/pi";
import Navbar from "../nav/Navbar";

export default function Search() {
  const { ingredients, setIngredients } = useIngredient();
  const [input, setInput] = useState("");

  function handleAddIngredient(event) {
    event.preventDefault();
    if (input.trim() && !ingredients.includes(input.trim())) {
      // si input.trim existe && si l'ingredient n'existe pas deja dans le bloc de recherche
      setIngredients([...ingredients, input.trim()]); // creer un nouveau tableau en copiant l'ancien et ajouter les nouvel ingredient
    }
    setInput(""); // on vide la barree de rechercher après ajout
  }

  function removeIngredient(ingToRemove) {
    setIngredients(ingredients.filter((ing) => ing !== ingToRemove));
  }

  return (
    <div className="search-container">
      <h2>Add ingredients</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <PrimaryBtn onClick={handleAddIngredient}>Add ingredient</PrimaryBtn>
      <div className="added-ing">
        <h3>In my fridge there a some : </h3>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>
              <p>{ing}</p>
              <PiPlus
                style={{ transform: "rotate(45deg)", fontSize: "24px" }}
                onClick={() => removeIngredient(ing)}
              />
            </li>
          ))}
        </ul>
      </div>
      <GoBtn to="/recipe">GO</GoBtn>
      <Navbar></Navbar>
    </div>
  );
}
