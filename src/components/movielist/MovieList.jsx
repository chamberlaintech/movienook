import React from "react";
import Movie from "../movie/Movie";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../context";
import "./MovieList.css";

const MovieList = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (movies.length < 1) {
    return (
      <h2 className="title" style={{ padding: "4.5rem 0", marginTop: "2rem" }}>
        No movies matched
      </h2>
    );
  }
  return (
    <div className="movie-list-section">
      <h1 className="title">Movies</h1>
      <div className="movies-center">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
