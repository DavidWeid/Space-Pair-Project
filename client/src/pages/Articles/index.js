import React, { Component } from "react";
import "./articles.css";
import API from "../../utils/articleAPI";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import ArticlePost from "../../components/ArticlePost";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    loggedUser: false,
    userInfo: {},
    articles: []
  };

  componentDidMount() {
    this.scrapeArticles();
    this.getUserInfo();
  }

  // Result is an array of article objects
  scrapeArticles = () => {
    API.scrapeArticles()
      .then(res => {
        console.log(res.data);
        this.setState({ articles: res.data });
      })
      .catch(err => console.log(err));
  };

  getUserInfo = () => {
    API.getUserInfo()
      .then(res => {
        console.log(res.data);
        this.setState({
          userInfo: res.data
        });
      })
      .catch(err => console.log(err));
  };

  createNewPost = (article, title) => {
    API.createNewPost(article)
      .then(res => {
        console.log(res);
        this.updateUser(res.data.result.shared, res.data.result._id, title);
      })
      .catch(err => console.log(err));
  };

  updateUser = (shared, postID, title) => {
    if (shared === false) {
      API.updateUserSaved(postID, title)
        .then(res => {
          console.log(res);
          this.getUserInfo();
        })
        .catch(err => console.log(err));
    } else if (shared === true) {
      API.updateUserShared(postID, title).then(res => {
        console.log(res);
        this.getUserInfo();
      });
    }
  };

  unsaveArticle = title => {
    API.destroyArticle(title)
      .then(res => {
        console.log(res);
        // this.removeUserSaved(postID, title);
      })
      .catch(err => console.log(err));
  };

  handleSaveButton = e => {
    e.preventDefault();
    console.log("Save clicked.");
    if (!this.state.userInfo._id) {
      return console.log("Please log in to save article.");
    } else {
      const dat = e.target.dataset;
      const newSavedArticle = {
        type: dat.type,
        shared: false,
        articleTitle: dat.title,
        articleImg: dat.img,
        articleAuthor: dat.author,
        articleURL: dat.url,
        articleDescription: dat.description,
        articleAltText: dat.alt
      };

      const articleTitle = newSavedArticle.articleTitle;

      console.log(newSavedArticle);

      this.createNewPost(newSavedArticle, articleTitle);
    }
  };

  handleShareButton = e => {
    e.preventDefault();
    console.log("Share clicked.");
    if (!this.state.userInfo._id) {
      return console.log("Please log in to share article.");
    } else {
      const dat = e.target.dataset;

      const newSharedArticle = {
        type: dat.type,
        shared: true,
        articleTitle: dat.title,
        articleImg: dat.img,
        articleAuthor: dat.author,
        articleURL: dat.url,
        articleDescription: dat.description,
        articleAltText: dat.alt
      };

      const articleTitle = newSharedArticle.articleTitle;

      console.log(newSharedArticle);

      this.createNewPost(newSharedArticle, articleTitle);
    }
  };

  handleUnsaveButton = e => {
    e.preventDefault();
    console.log("Unsave clicked.");
    const articleTitle = e.target.dataset.title;
    console.log(articleTitle);

    this.unsaveArticle(articleTitle);
  };

  handleUnshareButton = e => {
    e.preventDefault();
    console.log("Unshare clicked.");
    const articleTitle = e.target.dataset.title;
    console.log(articleTitle);
  };

  render() {
    const urlPic =
      "https://images.unsplash.com/photo-1481697943534-ea55b5ce970b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2688&q=80";

    return (
      <div style={{ height: "100%" }} className="article-page">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText
          user={this.props.user}
          changeUserState={this.props.changeUserState}
          bannerMessage="Articles"
        />
        {this.state.articles.length > 0 ? (
          <div className="roverPicGrid">
            <div className="spaceTaker" />
            <div className="articleHolder">
              {this.state.articles.map(article => (
                <ArticlePost
                  key={article.id}
                  article={article}
                  handleShareButton={this.handleShareButton}
                  handleSaveButton={this.handleSaveButton}
                  user={this.state.userInfo}
                  handleUnshareButton={this.handleUnshareButton}
                  handleUnsaveButton={this.handleUnsaveButton}
                />
              ))}
            </div>
          </div>
        ) : null}
        <nav className="formRover">
          <button className="searchBtn toRoverBtn">
            <Link className="banLink" to="/data">
              Rover Pictures
            </Link>
          </button>
        </nav>
      </div>
    );
  }
}

export default Articles;
