import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [navClicks, setNavClicks] = useState(0);

  useEffect(() => {
    setNavClicks((prev) => prev + 1);
  }, [location.key]);

  const [searchQurey, setSearchQurey] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();

        if (!Array.isArray(popularMovies) || popularMovies.length === 0) {
          setMovies([]);
          setError("Unable to load movies. Please try again later.");
        } else {
          setMovies(popularMovies);
          setError(null);
        }
      } catch (err) {
        setMovies([]);
        setError("Unable to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [navClicks]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQurey.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQurey);

      if (!Array.isArray(results) || results.length === 0) {
        setMovies([]);
        setError("No movies found for your search.");
      } else {
        setMovies(results);
        setError(null);
      }
    } catch (err) {
      setMovies([]);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }

    setSearchQurey("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQurey}
          onChange={(e) => setSearchQurey(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <div className="loading">Loading...</div>}

      {!loading && error && <div className="error-message">{error}</div>}

      {!loading && !error && movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
