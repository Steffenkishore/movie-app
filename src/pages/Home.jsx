import React from "react";
import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import { searchMovies , getPopularMovies } from "../services/api";
import "../css/Home.css"
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const [navClicks, setNavClicks] = useState(0);

    useEffect(() => {
        // whenever location changes, increase clicks
        setNavClicks((prev) => prev + 1);
    }, [location.key]); 

    const [searchQurey, setSearchQurey] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies......")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[navClicks])

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQurey.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQurey)
            setMovies(searchResults)
            setError(null)
        } catch (e) {
            console.log(err)
            setError("Failed to search movies....")
        } finally {
            setLoading(false)
        }
        setSearchQurey("")

    }
    
    return (
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => {
                setSearchQurey(e.target.value);
            }}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">
            Loading....
        </div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    );
} 

export default Home