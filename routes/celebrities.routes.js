const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  Celebrity.find()
    .then((CelebritiesFromDatabase) => {
      res.render("celebrities/celebrities", {
        allcelebrities: CelebritiesFromDatabase,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
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
