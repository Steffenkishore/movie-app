// const BASE_URL = "http://localhost:5000/api/movies";
const BASE_URL = "https://movie-app-eq92.onrender.com/api/movies";

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/popular`);
  return await res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search?query=${encodeURIComponent(query)}`
  );
  return await res.json();
};