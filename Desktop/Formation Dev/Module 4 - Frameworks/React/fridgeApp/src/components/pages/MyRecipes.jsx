import { useFavourite } from "../context/FavouriteRCtxt";
import RecipeCard from "../cards/RecipeCard";
import Navbar from "../nav/Navbar";
import { useNavigate } from "react-router";
import { PiArrowLeft } from "react-icons/pi";

export default function myRecipes() {
  const navigate = useNavigate(); // initialise le hook
  const goBack = () => {
    navigate(-1);
  };
  const { favourites, setFavourites } = useFavourite();

  return (
    <div>
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
        My favourites recipes
      </h2>
      <div className="recipes-grid">
        {favourites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
