import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

/* Get popular movies */
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`
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
      `${process.env.BASE_URL}/search/movie?api_key=${
        process.env.API_KEY
      }&query=${encodeURIComponent(query)}`
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
