import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const handleCardEvent = (movieTitle) => {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        movieTitle
      )}`;
      window.open(googleSearchUrl, "_blank");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className=""
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            {favorite ? "❤️" : "🤍"}
          </button>
          <div
            className="transparent-box"
            onClick={() => handleCardEvent(movie.title)}
          ></div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
