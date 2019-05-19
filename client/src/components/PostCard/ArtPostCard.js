import React from "react";
import "./postcard.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ArtPostCard = props => {
  return (
    <div className="post-block article-post">
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
          <Row>
            <Col>
              <p className="card-text initial-comment">
                {props.initialComment}
              </p>
            </Col>
          </Row>

          <Row className="info-row">
            <Col xs="12" sm="3">
              <p className="date-stamp">{props.time}</p>
            </Col>
            <Col xs="12" sm="9" className="d-flex justify-content-end">
              {props.userLikedStatus === "notLiked" ? (
                <button
                  onClick={props.handleLikeBtn}
                  className="post-btn like-btn"
                  id={props.id}
                >
                  {" "}
                  Like
                </button>
              ) : (
                <button
                  onClick={props.handleUnlikeBtn}
                  className="post-btn like-btn"
                  id={props.id}
                >
                  Unlike
                </button>
              )}

              <Link
                to={`/Posts/${props.id}`}
                className="post-btn comment-btn"
                id={props.id}
                value="comment"
              >
                Comment{" "}
                {props.numComments === 0 ? (
                  ""
                ) : (
                  <span className="comment-value">{props.numComments}</span>
                )}
              </Link>

              {props.userSavedStatus === "notSaved" ? (
                <button
                  onClick={props.handleSaveBtn}
                  className="post-btn save-btn"
                  id={props.id}
                >
                  {" "}
                  Save
                </button>
              ) : (
                <button
                  onClick={props.handleUnsaveBtn}
                  className="post-btn save-btn"
                  id={props.id}
                >
                  Unsave
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ArtPostCard;
