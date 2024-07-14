import React, { useCallback, useState, useEffect, useContext } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";
const searchEndpoint = `${baseUrl}/search/movie`;
const movieDetailEndpoint = `${baseUrl}/movie`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [favoritesList, setFavoritesList] = useState(() => {
    const storedFavorites = localStorage.getItem("favoritesList");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const searchUrl = `${searchEndpoint}?api_key=${apiKey}&query=${search}`;
      const response = await fetch(searchUrl);
      const data = await response.json();
      console.log("Fetched movie data:", data);

      if (data.results && data.results.length > 0) {
        const movieIds = data.results.map((movie) => movie.id);
        const movieDetails = await Promise.all(
          movieIds.map(async (id) => {
            const detailUrl = `${movieDetailEndpoint}/${id}?api_key=${apiKey}`;
            const detailResponse = await fetch(detailUrl);
            return detailResponse.json();
          })
        );
        setMovies(movieDetails);
      } else {
        setMovies([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [search, fetchMovies]);

  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  const handleAddToFavorites = (movie) => {
    if (!movie || !movie.id) return;

    const index = favoritesList.findIndex((item) => item.id === movie.id);

    if (index === -1) {
      const updatedFavorites = [...favoritesList, movie];
      setFavoritesList(updatedFavorites);
    } else {
      const updatedFavorites = favoritesList.filter(
        (item) => item.id !== movie.id
      );
      setFavoritesList(updatedFavorites);
    }

    console.log("Favorites list updated:", favoritesList);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearch,
        movies,
        favoritesList,
        handleAddToFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
