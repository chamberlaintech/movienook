import React from "react";
import Search from "../../components/search/Search";
import MovieList from "../../components/movielist/MovieList";
import "./Home.css";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="home-section">
      <Hero />
      <Search />
      <MovieList />
    </div>
  );
};

export default Home;
