import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ title, poster_path, id }) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "https://via.placeholder.com/150";

  return (
    <div className="movie-section">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="movie-details">
        <h2>{title}</h2>
        <Link to={`/movie/${id}`} className="btn btn-details">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Movie;
