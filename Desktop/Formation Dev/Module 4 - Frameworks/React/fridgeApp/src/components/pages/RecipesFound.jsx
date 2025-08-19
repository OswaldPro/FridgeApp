import RecipeCard from "../cards/RecipeCard";
import { useIngredient } from "../context/IngredientCtxt";
import { PiArrowLeft } from "react-icons/pi";
import { useNavigate } from "react-router";
import Navbar from "../nav/Navbar";

export default function RecipesFound() {
  const navigate = useNavigate();
  const goBack = () => {
    // fonction pour revenir en arrière
    navigate(-1);
  };

  const { results, ingredients } = useIngredient();

  function filteredResults() {
    return results.filter((recipe) =>
      ingredients.some((ing) =>
        recipe.ingredients.some((rIng) =>
          rIng.nom.toLowerCase().includes(ing.toLowerCase())
        )
      )
    );
  }

  const recipes = filteredResults();
  if (recipes.length === 0) {
    return (
      <div className="recipes-container">
        <h2>
          <button
            onClick={goBack}
            style={{ background: "none", border: "none" }}
          >
            <PiArrowLeft
              style={{
                color: "#000",
                fontSize: "32px",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
            />
          </button>
          Suggested recipes
        </h2>
        <p>Aucune recette trouvée.</p>
        <Navbar></Navbar>
      </div>
    );
  }

  return (
    <div className="recipes-container">
      <h2>
        <button onClick={goBack} style={{ background: "none", border: "none" }}>
          <PiArrowLeft
            style={{
              color: "#000",
              fontSize: "32px",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
          />
        </button>
        Suggested recipes
      </h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
