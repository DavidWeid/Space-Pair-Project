import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextArea, FormBtn } from "../Form";

const ArtCommentCard = props => {
  console.log(props.comments);

  let initialComment;

  if (!props.userComment) {
    initialComment = "";
  } else {
    initialComment = `${props.username}: ${props.userComment}`;
  }

  const displayComments = props.comments.map(comment => {
    let commentBtns;

    if (props.userID !== comment.userID) {
      commentBtns = "";
    } else {
      commentBtns = (
        <div className="comment-btns-div">
          {/* <button
            className="post-btn"
            id={comment._id}
            value="edit"
            onClick={props.handleCommentBtns}
          >
            Edit
          </button> */}
          <button
            className="post-btn"
            id={comment._id}
            value="delete"
            onClick={props.handleCommentBtns}
          >
            Delete
          </button>
        </div>
      );
    }

    return (
      <div key={comment._id} className="comment-row">
        <p>
          <span className="comment-username">{comment.username}</span>:{" "}
          {comment.message}
        </p>
        {commentBtns}
      </div>
    );
  });

  return (
    <div>
      <div className="card">
        {props.img !== "" ? (
          <img src={props.img} className="card-img-top" alt={props.type} />
        ) : (
          <div className="no-image" />
        )}

        <Container fluid className="card-body">
          <Row>
            <Col className="article-title">{props.articleTitle}</Col>
          </Row>
          <Row>
            <Col>
              <a
                className="article-description"
                href={props.articleURL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {props.articleDescription}
              </a>
            </Col>
          </Row>
          <Row className="info-row">
            <Col xs="12" sm="8">
              <p className="date-stamp">Posted: {props.time}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="card-text initial-comment">{initialComment}</p>
              <div className="comments-display">{displayComments}</div>
            </Col>
          </Row>
          <Row className="form-row">
            <Col>
              <form>
                <TextArea
                  value={props.value}
                  onChange={props.handleInputChange}
                  name="comment"
                  placeholder="Your Thoughts"
                />
                <FormBtn onClick={props.handleFormSubmit}>Submit</FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ArtCommentCard;
