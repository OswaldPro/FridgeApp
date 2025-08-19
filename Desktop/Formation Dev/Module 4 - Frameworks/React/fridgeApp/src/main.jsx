import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { IngredientProvider } from "./components/context/IngredientCtxt.jsx";
import { FavouriteProvider } from "./components/context/FavouriteRCtxt.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IngredientProvider>
      <FavouriteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavouriteProvider>
    </IngredientProvider>
  </StrictMode>
);
