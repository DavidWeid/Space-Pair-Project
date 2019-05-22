import React from "react";
import "./articleModalCSS.css";

const ArticleModal = props => {
  return (
    <div className="shareModal">
      <img src={props.img} alt={props.alt} />
      <h5>{props.title}</h5>
      <h6 className="textRight">by {props.author}</h6>
      <label>Comment</label>
      <textarea
        className="shareArticleText"
        onChange={e => props.handleInputChange(e)}
        name="userComment"
        value={props.userComment}
      />
      <div className="articleModalButtons">
        <button
          className="articleModalBtn"
          data-type="article"
          data-title={props.title}
          data-author={props.author}
          data-description={props.description}
          data-alt={props.alt}
          data-img={props.img}
          data-user_comment={props.userComment}
          onClick={e => props.handleShareButton(e)}
        >
          Share
        </button>

        <button
          className="articleModalBtn"
          onClick={e => props.handleShareModal(e)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ArticleModal;
