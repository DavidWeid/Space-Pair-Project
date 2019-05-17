import React from "react";

const ArticlePost = props => {
  const article = props.article;

  const filterSavedArticle = props.userSavedArray.filter(
    each => each === article.title
  );
  const filterSharedArticle = props.userSharedArray.filter(
    each => each === article.title
  );
  const showSaved = filterSavedArticle.length < 1 ? true : false;
  const showShared = filterSharedArticle.length < 1 ? true : false;

  return (
    <div className="picBody articleBody">
      <img src={article.imgURL} alt={article.altText} />
      <div className="infoBox">
        <div className="centerBox">
          <h4>{article.title}</h4>
          <h6>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.summary}
            </a>
          </h6>
        </div>
        <div className="roverPicButtons">
          {showSaved && showShared ? (
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
          ) : null}

          {!showSaved && showShared ? (
            <button
              className="roverPicBtn"
              data-title={article.title}
              onClick={e => props.handleUnsaveButton(e)}
            >
              Unsave
            </button>
          ) : null}

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
