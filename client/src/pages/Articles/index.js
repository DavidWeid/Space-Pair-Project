import React, { Component } from "react";
import "./articles.css";
import API from "../../utils/articleAPI";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";

class Articles extends Component {
  state = {
    loggedUser: false
  };

  componentDidMount() {
    this.scrapeArticles();
  }

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const urlPic = "https://images.pexels.com/photos/1327218/pexels-photo-1327218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    return (
      <div className="article-page">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText
          user={this.props.user}
          changeUserState={this.props.changeUserState}
          bannerMessage="Articles"
        />

        Hello!
      </div>
    );
  }
}

export default Articles;
