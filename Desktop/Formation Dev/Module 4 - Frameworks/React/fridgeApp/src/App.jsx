import { Route, Routes } from "react-router";

import Search from "./components/pages/Search";
import Recipe from "./components/pages/RecipeDetails";
import MyRecipe from "./components/pages/MyRecipes";
import Home from "./components/pages/HomePage";
import RecipesFound from "./components/pages/recipesFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/myrecipe" element={<MyRecipe />} />
        <Route path="/recipe" element={<RecipesFound />} />
      </Routes>
    </>
  );
}

export default App;
