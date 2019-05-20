import React, { Component } from "react";
import "./articles.css";
import API from "../../utils/articleAPI";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import ArticlePost from "../../components/ArticlePost";
import ArticleModal from "../../components/ArticleModal";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    loggedUser: false,
    userInfo: {},
    articles: [],
    modal: false,

    // Modal State
    title: "",
    img: "",
    author: "",
    url: "",
    description: "",
    alt: "",
    userComment: "",
  };

  // On load, scrape articles and grab User info if logged in
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

  // Object of user info (for saving/sharing posts)
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

  // Article object for new Post
  // Then update user with new post title and postID
  createNewPost = (article, title) => {
    API.createNewPost(article)
      .then(res => {
        console.log(res);
        this.updateUser(res.data.result.shared, res.data.result._id, title);
        this.setState({
          modal: !this.state.modal,
          userComment: "",
          title: "",
          img: "",
          author: "",
          url: "",
          description: "",
          alt: ""
        })
      })
      .catch(err => console.log(err));
  };

  // If the post is shared, update articleTitleShared, else update articleTitleSaved
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

  // This destroys the Post matching at "userID" and "articleTitle"
  deleteUnsavedArticle = title => {
    API.deleteUnsavedArticle(title)
      .then(res => {
        console.log("deleteUnsavedArticle: ", res);
        this.unsaveArticleFromUser(res.data._id, title);
      })
      .then(this.getUserInfo())
      .catch(err => console.log(err));
  };

  // Remove Post _id from postIDs array and remove title from articleTitleSaved array
  unsaveArticleFromUser = (postID, title) => {
    API.removeSavedArticle(postID, title)
      .then(res => {
        console.log(res);
        this.getUserInfo();
      })
      .catch(err => console.log(err));
  };

  unshareArticle = articleTitle => {
    API.updateUnsharedArticle(articleTitle)
      .then(res => {
        console.log(res);
        this.removeSharedArticle(articleTitle);
      })
      .catch(err => console.log(err));
  };

  removeSharedArticle = title => {
    API.removeSharedArticle(title)
      .then(res => {
        console.log(res);
        this.getUserInfo();
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
        articleAltText: dat.alt,
        userComment: dat.user_comment
      };

      const articleTitle = newSharedArticle.articleTitle;

      console.log(newSharedArticle);

      this.createNewPost(newSharedArticle, articleTitle);
    }
  };

  handleShareModal = e => {
    e.preventDefault();
    console.log("show the modal");
    const dat = e.target.dataset;
    if (this.state.modal) {
      this.setState({
        modal: !this.state.modal,
        userComment: "",
        title: "",
        img: "",
        author: "",
        url: "",
        description: "",
        alt: ""
      })
    } else {
      this.setState({
        modal: !this.state.modal,
        title: dat.title,
        img: dat.img,
        author: dat.author,
        url: dat.url,
        description: dat.description,
        alt: dat.alt
      });
    }

  }

  handleUnsaveButton = e => {
    e.preventDefault();
    console.log("Unsave clicked.");
    const articleTitle = e.target.dataset.title;
    console.log(articleTitle);

    this.deleteUnsavedArticle(articleTitle);
  };

  handleUnshareButton = e => {
    e.preventDefault();
    console.log("Unshare clicked.");
    const articleTitle = e.target.dataset.title;
    console.log(articleTitle);

    this.unshareArticle(articleTitle);
  };

  handleInputChange = e => {
    e.preventDefault();
    console.log("working");
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

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
                  handleShareModal={this.handleShareModal}
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
        {this.state.modal ? <div>
          <div className="backdrop"></div>
          <ArticleModal
            handleShareModal={this.handleShareModal}
            title={this.state.title}
            img={this.state.img}
            author={this.state.author}
            url={this.state.url}
            description={this.state.description}
            alt={this.state.alt}
            handleInputChange={this.handleInputChange}
            handleShareButton={this.handleShareButton}
            userComment={this.state.userComment}
          />
        </div> : null}
      </div>
    );
  }
}

export default Articles;
