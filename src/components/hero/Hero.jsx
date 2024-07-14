import React, { useEffect } from "react";
import "./Hero.css";
import { image2 } from "../../assets";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Discover and explore the latest blockbusters.
          </h1>
          <p>
            MovieNook enhances your movie-watching experience by providing
            comprehensive details, reviews, and an easy-to-use platform for
            managing your favorite films.
          </p>
        </div>
        <div className="hero-image-container">
          <img src={image2} alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
