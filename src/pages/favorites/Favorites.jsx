import React from "react";
import { useGlobalContext } from "../../context";
import Movie from "../../components/movie/Movie";
import "./Favorites.css";

const Favorites = () => {
  const { favoritesList } = useGlobalContext();

  const uniqueFavoritesList = Array.from(
    new Set(favoritesList.map((movie) => movie.id))
  ).map((id) => favoritesList.find((movie) => movie.id === id));

  if (uniqueFavoritesList.length === 0) {
    return (
      <h2 className="title" style={{ padding: "4.5rem 0", color: "#D90245" }}>
        No favorite movies yet!
      </h2>
    );
  }
  return (
    <div className="favorites-section">
      <h2 className="title"></h2>
      <div className="favorites-center">
        {uniqueFavoritesList.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
