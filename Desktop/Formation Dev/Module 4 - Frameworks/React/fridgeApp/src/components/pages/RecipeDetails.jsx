import { useIngredient } from "../context/IngredientCtxt";
import { NavLink, useNavigate } from "react-router";
import { useParams } from "react-router";
import { PiArrowLeft } from "react-icons/pi";
import AddToFavouriteButton from "../buttons/AddToFav";
import Navbar from "../nav/Navbar";

export default function RecipeDetails() {
  const navigate = useNavigate(); // initialise le hook
  const goBack = () => {
    navigate(-1);
  };

  const { id } = useParams(); // récupère l'id depuis l'URL
  const { results } = useIngredient(); // toutes les recettes du contexte

  // recherche de la recette correspondante a l'id en url et la recup
  const recipe = results.find((r) => r.id === parseInt(id)); // find retourne 1 seul element qui rempli la condition
  // r.id = 1 recette du tableau dont l'id est celui recup par usParam (dans l'(url) et parsInt(id) convertis la chaine de caracter "17" en un nombre entier 17
  if (!recipe) {
    return <p>Recette introuvable.</p>;
  }

  return (
    <div className="recipe-details">
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
        {recipe.nom}
      </h2>
      <img className="recipe-img" src={recipe.image} alt={recipe.nom} />
      <AddToFavouriteButton recipe={recipe}></AddToFavouriteButton>
      <NavLink to="/myrecipe">My recipe</NavLink>

      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>
            {ing.illustration} {ing.nom} — {ing.quantite} {ing.unite}
          </li>
        ))}
      </ul>

      <h3>Étapes</h3>
      <ol>
        {recipe.etapes.map((etape, i) => (
          <li key={i}>{etape}</li>
        ))}
      </ol>
      <Navbar></Navbar>
    </div>
  );
}
