import Axios from "axios";

export default {
  scrapeArticles() {
    return Axios.get(`/api/articles/scrape`);
  },

  getUserInfo() {
      return Axios.get(`/api/users/forum/info`);
  },

  createNewPost(article) {
    return Axios.post(`/api/posts`, article)
  }
};
