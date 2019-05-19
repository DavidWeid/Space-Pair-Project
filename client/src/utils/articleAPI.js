import Axios from "axios";

export default {
  scrapeArticles() {
    return Axios.get(`/api/articles/scrape`);
  },

  getUserInfo() {
    return Axios.get(`/api/users/forum/info`);
  },

  createNewPost(article) {
    return Axios.post(`/api/posts`, article);
  },

  updateUserSaved(postID, title) {
    return Axios.put(`/api/users/update/posts/savedArticle/${postID}/${title}`);
  },

  updateUserShared(postID, title) {
    return Axios.put(
      `/api/users/update/posts/sharedArticle/${postID}/${title}`
    );
  },

  deleteUnsavedArticle(title) {
    return Axios.delete(`/api/posts/deleteSavedArticle/${title}`);
  },

  removeSavedArticle(postID, title) {
    return Axios.put(
      `/api/users/update/posts/unsaveArticle/${postID}/${title}`
    );
  },

  updateUnsharedArticle(title) {
    return Axios.put(`/api/posts/unshareArticle/${title}`);
  },

  removeSharedArticle(title) {
    return Axios.put(`/api/users/update/posts/unshareArticle/${title}`);
  }
};
