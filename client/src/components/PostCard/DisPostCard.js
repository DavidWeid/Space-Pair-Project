import React from "react";
import "./postcard.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const DisPostCard = props => {
  // If no initial comment, don't make space
  let initialComment;

  if (!props.userComment) {
    initialComment = "";
  } else {
    initialComment = `${props.username}: ${props.userComment}`;
  }

  // Allow User to like / unlike posts, with visual feedback
  let likeBtnVisual = "Like";
  let userLikedStatus = "notLiked";
  let saveBtnVisual = "Save";
  let userSavedStatus = "notSaved";

  // User is logged in: "like" button shows icon IF liked and userLikedStatus = "liked" IF liked
  if (props.userInfo.likes !== undefined) {
    if (props.userInfo.likes.indexOf(props.id) === -1) {
      console.log("This post hasn't been liked by the user.", props.id);
      likeBtnVisual = "Like";
      userLikedStatus = "notLiked";
    } else {
      console.log("This post has been liked by the user.", props.id);
      likeBtnVisual = (
        <span>
          <i className="fas fa-hand-spock" />
        </span>
      );
      userLikedStatus = "liked";
    }
  }

  if (props.userInfo.postIDs !== undefined) {
    if (props.userInfo.postIDs.indexOf(props.id) === -1) {
      console.log("This post hasn't been saved by the user.", props.id);
      saveBtnVisual = "Save";
      userSavedStatus = "notSaved";
    } else {
      console.log("This post has been saved by the user.", props.id);
      saveBtnVisual = (
        <span>
          <i className="fas fa-save" />
        </span>
      );
      userSavedStatus = "saved";
    }
  }

  return (
    <div className="post-block discussion-post">
      <div className="card">
        <div className="post-owner-div">
          <span className="post-owner">{props.username}</span> shared:
        </div>
        {props.img !== "" ? (
          <img src={props.img} className="card-img-top" alt={props.type} />
        ) : (
          <div className="no-image" />
        )}

        <Container fluid className="card-body">
          <Row>
            <Col className="discussion-title">{props.discussionTitle}</Col>
          </Row>
          <Row>
            <Col>
              <p className="card-text initial-comment">{initialComment}</p>
            </Col>
          </Row>

          <Row className="info-row">
            <Col xs="12" sm="3">
              <p className="date-stamp">{props.time}</p>
            </Col>
            <Col xs="12" sm="9" className="d-flex justify-content-end">
              <button
                onClick={props.handlePostBtns}
                className="post-btn like-btn"
                id={props.id}
                value="like"
                user-liked={userLikedStatus}
              >
                {likeBtnVisual}
              </button>
              <Link
                to={`/Posts/${props.id}`}
                className="post-btn comment-btn"
                id={props.id}
                value="comment"
              >
                Comment
              </Link>
              <button
                onClick={props.handlePostBtns}
                className="post-btn save-btn"
                id={props.id}
                value="save"
                user-saved={userSavedStatus}
              >
                {saveBtnVisual}
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DisPostCard;
