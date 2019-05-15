const router = require("express").Router();
const Post = require("../../models/Post");
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/scrape", (req, res) => {
  axios.get("https://www.space.com/news").then(response => {
      const $ = cheerio.load(response.data);
  });
  res.json(200);
});

module.exports = router;
