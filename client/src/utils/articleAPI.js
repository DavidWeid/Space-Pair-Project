import Axios from "axios";
import cheerio from "cheerio";

export default {
  scrapeArticles() {
    return Axios.get(`https://www.space.com/news`)
    // .then(response => {
    //   const $ = cheerio.load(response.data);
    //   const result = [];

    //   $("").each((i, element) => {
    //     let title;
    //     let link;
    //     let teaser;

    //     result.push({
    //       title: title,
    //       link: link,
    //       teaser: teaser
    //     });

    //     console.log("\n Results of Scrape: \n" + result);
    //   });
    // });
  }
};
