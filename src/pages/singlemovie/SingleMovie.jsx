import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Loading from "../../components/loading/Loading";
import "./SingleMovie.css";

const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://api.themoviedb.org/3/movie/`;

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const { handleAddToFavorites, favoritesList } = useGlobalContext();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${url}${id}?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return <div>No movie details found</div>;
  }

  const isInFavorites = favoritesList.some((item) => item.id === movie.id);

  return (
    <div className="single-movie-section">
      <h2 className="title">{movie.title}</h2>
      <div className="single-movie">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
        <div className="button-container">
          <Link to="/" className="btn btn-back">
            Back Home
          </Link>
          <button
            onClick={() => handleAddToFavorites(movie)}
            className="btn btn-favorites"
          >
            {isInFavorites ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
