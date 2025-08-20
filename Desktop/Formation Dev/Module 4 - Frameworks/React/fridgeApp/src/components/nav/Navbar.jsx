import { NavLink } from "react-router";
import { PiHouse, PiBookBookmark, PiListBullets } from "react-icons/pi";
import { useFavourite } from "../context/FavouriteRCtxt";

export default function Navbar() {
  const { favouritesCount } = useFavourite();

  return (
    <div className="navbar">
      <div className="home">
        <NavLink
          to="/Search"
          style={({ isActive }) => ({
            color: isActive ? "#FF5900" : "white",
          })}
        >
          <PiHouse size={"24px"} />
        </NavLink>
      </div>
      <div className="list">
        <NavLink
          to="/recipe"
          style={({ isActive }) => ({
            color: isActive ? "#FF5900" : "white",
          })}
        >
          <PiListBullets size={"24px"} />
        </NavLink>
      </div>
      <div className="fav">
        <NavLink
          to="/myrecipe"
          style={({ isActive }) => ({
            color: isActive ? "#FF5900" : "white",
          })}
        >
          <PiBookBookmark size={"24px"} />
          {favouritesCount > 0 && (
            <span className="badge">{favouritesCount}</span>
          )}
        </NavLink>
      </div>
    </div>
  );
}
