const router = require("express").Router();
// const Post = require("../../models/Post");
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/scrape", (req, res) => {
  axios.get("https://www.space.com/news").then(response => {
    const $ = cheerio.load(response.data);

    const result = [];

    let article = $("article.search-result");

    let resultNum = 0;

    article.each((i, el) => {
      let id = resultNum++;

      let title = $(el)
        .children()
        .find("h3")
        .text();
      let summary = $(el)
        .children()
        .find("p.synopsis")
        .text()
        .trim();
      let author = $(el)
        .children()
        .find("span.by-author")
        .children("span")
        .text()
        .trim();
      let link = $(el)
        .parent()
        .attr("href");
      let imgSet = $(el)
        .children()
        .find("img")
        .attr("data-srcset");

      let imgSplit = imgSet.split(", ");
      let largeImg = imgSplit[2];
      let imgURLArray = largeImg.toString().split(" ");
      let imgURL = imgURLArray[0].toString();

      let altText = $(el)
        .children()
        .find("img")
        .attr("alt");

      //   console.log(author);

      let article = {
        id: id,
        title: title,
        link: link,
        summary: summary,
        author: author,
        imgURL: imgURL,
        altText: altText
      };

      //   console.log(article);
      result.push(article);
    });

    // Result is an array of article objects
    // console.log("\n Result of Scrape: \n", result);

    res.status(200).json(result);
  });
});

module.exports = router;
