import React from "react";

const ArticlePost = props => {
  const article = props.article;

  let showSaved;
  let showShared;

  if (props.user.articleTitleSaved || props.user.articleTitleShared) {
    const filterSavedArticle = props.user.articleTitleSaved.filter(
      title => title === article.title
    );

    console.log(filterSavedArticle);

    const filterSharedArticle = props.user.articleTitleShared.filter(
      title => title === article.title
    );

    console.log(filterSharedArticle);

    showSaved = filterSavedArticle.length < 1 ? true : false;
    showShared = filterSharedArticle.length < 1 ? true : false;
  } else {
    showSaved = true;
    showShared = true;
  }

  return (
    <div className="picBody articleBody">
      <img src={article.imgURL} alt={article.altText} />
      <div className="infoBox">
        <div className="centerBox">
          <h4 className="articleTitle">{article.title}</h4>
          <h6 className="articleLink">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.summary}
            </a>
          </h6>
          <p className="articleAuthor">By {article.author}</p>
        </div>
        <div className="roverPicButtons">
          {showSaved ? (
            <button
              className="roverPicBtn"
              data-type="article"
              data-title={article.title}
              data-img={article.imgURL}
              data-author={article.author}
              data-url={article.link}
              data-description={article.summary}
              data-alt={article.altText}
              onClick={e => props.handleSaveButton(e)}
            >
              Save
            </button>
          ) : (
            <button
              className="roverPicBtn"
              data-title={article.title}
              onClick={e => props.handleUnsaveButton(e)}
            >
              Unsave
            </button>
          )}

          {showShared ? (
            <button
              className="roverPicBtn"
              data-type="article"
              data-title={article.title}
              data-img={article.imgURL}
              data-author={article.author}
              data-url={article.link}
              data-description={article.summary}
              data-alt={article.altText}
              onClick={e => props.handleShareButton(e)}
            >
              Share
            </button>
          ) : (
            <button
              className="roverPicBtn"
              data-title={article.title}
              onClick={e => props.handleUnshareButton(e)}
            >
              Unshare
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePost;
