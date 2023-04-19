const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("celebrities/celebrities");
  console.log("test");
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
  console.log("test");
});

router.post("/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (err) {
    console.log(err);
    res.redirect("/celebrities/new-celebrity");
  }
});

module.exports = router;
