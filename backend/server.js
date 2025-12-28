import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "05bcb99ddae8612124cdd66fbf4c1070";
const BASE_URL = "https://api.themoviedb.org/3";

/* Get popular movies */
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
});

/* Search movies */
app.get("/api/movies/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ error: "Failed to search movies" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
