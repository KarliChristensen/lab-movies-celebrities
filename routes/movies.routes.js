const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find().populate("cast");
    res.render("movies/movies", { allMovies });
  } catch (err) {
    console.log(err);
  }
});

router.get("/create", (req, res, next) => {
  res.render("movies/new-movie");
});

module.exports = router;
