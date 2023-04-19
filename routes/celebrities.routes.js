const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
})

router.get("/celebrities", (req, res, next) => {
    res.render("celebrities/celebrities")
    console.log("okay")
});

module.exports = router;