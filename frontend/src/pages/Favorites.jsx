import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard  from "../components/MovieCard";


function favorites () {
    const {favorites} = useMovieContext();
    console.log(favorites)

    if(favorites.length) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movie-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding favorite movies here</p>
            </div>
        );
    }
}

export default favorites