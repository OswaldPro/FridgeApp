import { useIngredient } from "../context/IngredientCtxt";
import { NavLink, useNavigate } from "react-router";
import { useParams } from "react-router";
import { PiArrowLeft, PiClockBold, PiUserBold } from "react-icons/pi";
import { FiLoader } from "react-icons/fi";
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
      <div className="top-details">
        <img className="recipe-img" src={recipe.image} alt={recipe.nom} />
        <div className="prep-details">
          <span className="clock">
            <PiClockBold size={"24px"} />
            {recipe.temps_preparation}
          </span>

          <span className="person">
            <PiUserBold size={"24px"} />
            {recipe.nombre_personnes}
          </span>

          <span className="loader">
            <FiLoader size={"24px"} />
            {recipe.temps_cuisson}
          </span>

          <AddToFavouriteButton recipe={recipe}></AddToFavouriteButton>
        </div>
      </div>

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
